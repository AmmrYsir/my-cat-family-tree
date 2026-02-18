import { createSignal, Show } from "solid-js";
import { CatNode as CatNodeType } from "../utils/buildTree";

export interface CatNodeProps {
  node: CatNodeType;
  collapsed?: boolean;
}

/**
 * Recursively renders a cat node as a flat modern card with connector lines.
 */
export default function CatNode(props: CatNodeProps) {
  const [isCollapsed, setIsCollapsed] = createSignal(
    props.collapsed ?? false
  );

  const hasChildren = () => props.node.children.length > 0;

  // Horizontal bar width = (children * cardWidth) + (gaps * gapWidth) - cardWidth
  // We use CSS to span it via the children-row width instead (simpler approach below).

  return (
    <div class="tree-node">
      {/* ── Card ── */}
      <button
        type="button"
        class="cat-card"
        onClick={() => hasChildren() && setIsCollapsed(!isCollapsed())}
        style={{ cursor: hasChildren() ? "pointer" : "default" }}
        aria-expanded={hasChildren() ? !isCollapsed() : undefined}
      >
        {/* Avatar */}
        <Show
          when={props.node.avatarUrl}
          fallback={<div class="cat-avatar-fallback">🐱</div>}
        >
          <img
            src={props.node.avatarUrl}
            alt={props.node.name}
            class="cat-avatar"
            onError={(e) => {
              // Swap to fallback emoji on broken image
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              const fb = document.createElement("div");
              fb.className = "cat-avatar-fallback";
              fb.textContent = "🐱";
              el.parentElement?.insertBefore(fb, el);
            }}
          />
        </Show>

        {/* Name */}
        <span class="cat-name">{props.node.name}</span>

        {/* Chevron — only shown when node has children */}
        <Show when={hasChildren()}>
          <span
            class={`cat-chevron${isCollapsed() ? "" : " cat-chevron--open"}`}
          >
            ▾
          </span>
        </Show>
      </button>

      {/* ── Children ── */}
      <Show when={hasChildren()}>
        <div
          class={`children-collapse${isCollapsed() ? " children-collapse--closed" : " children-collapse--open"
            }`}
        >
          {/* Vertical line down from parent card */}
          <div class="connector-down" />

          {/* Horizontal bar + children */}
          <div style={{ position: "relative" }}>
            {/* Horizontal connector bar — spans the children row */}
            <Show when={props.node.children.length > 1}>
              <div
                class="connector-h-bar"
                style={{
                  // Span from center of first child to center of last child
                  // Each card is 96px wide, gap is 24px
                  width: `${(props.node.children.length - 1) * (96 + 24)}px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </Show>

            {/* Children row */}
            <div class="children-row">
              {props.node.children.map((child) => (
                <div class="child-wrapper">
                  {/* Vertical drop to each child */}
                  <div class="connector-drop" />
                  <CatNode node={child} collapsed={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
}
