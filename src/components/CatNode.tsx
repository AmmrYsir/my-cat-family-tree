import { createSignal, Show } from "solid-js";
import { CatNode as CatNodeType } from "../utils/buildTree";

export interface CatNodeProps {
  node: CatNodeType;
  collapsed?: boolean;
}

/**
 * Recursively renders a cat node with avatar, name and children.
 */
export default function CatNode(props: CatNodeProps) {
  const [isCollapsed, setIsCollapsed] = createSignal(
    props.collapsed ?? false
  );

  return (
    <div class="flex flex-col items-center">
      {/* Node Box */}
      <button
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed())}
        class="group relative p-1 bg-white dark:bg-gray-800 rounded-full shadow-md cursor-pointer"
      >
        <img
          src={props.node.avatarUrl ?? ""}
          alt={props.node.name}
          class="w-12 h-12 object-cover rounded-full mb-1"
        />
        <span class="text-sm font-medium text-center block truncate">
          {props.node.name}
        </span>
      </button>

      {/* Connector line to children */}
      <Show when={props.node.children.length > 0 && !isCollapsed()}>
        <div class="flex flex-col items-center mt-2">
          {/* Vertical line leading down */}
          <div class="border-l-2 border-gray-400 h-4"></div>

          <div class="flex flex-row space-x-8">
            {props.node.children.map((child) => (
              <CatNode node={child} collapsed={false} />
            ))}
          </div>
        </div>
      </Show>
    </div>
  );
}
