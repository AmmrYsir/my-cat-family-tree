import { createSignal, For, Show, onMount } from "solid-js";
import CatNode from "./CatNode";
import { buildTree, CatData, CatNode as CatNodeType } from "../utils/buildTree";

export default function CatTree() {
  const [tree, setTree] = createSignal<CatNodeType[]>([]);

  onMount(async () => {
    const res = await fetch("/catFamily.json");
    const data: CatData[] = await res.json();
    setTree(buildTree(data));
  });

  return (
    <div class="tree-container">
      <Show
        when={tree().length > 0}
        fallback={
          <div class="skeleton-wrap">
            <div class="skeleton-card" />
            <div class="skeleton-row">
              <div class="skeleton-card" />
              <div class="skeleton-card" />
            </div>
          </div>
        }
      >
        {/* Root nodes side by side */}
        <div class="children-row">
          <For each={tree()}>{(root) => <CatNode node={root} />}</For>
        </div>
      </Show>
    </div>
  );
}
