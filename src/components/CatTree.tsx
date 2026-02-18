import { createSignal, For, Show, onMount } from "solid-js";
import CatNode from "./CatNode";
import { buildTree, CatData, CatNode as CatNodeType } from "../utils/buildTree";

export default function CatTree() {
  const [tree, setTree] = createSignal<CatNodeType[]>([]);

  onMount(async () => {
    // Fetch local JSON file
    const res = await fetch("/catFamily.json");
    const data: CatData[] = await res.json();
    setTree(buildTree(data));
  });

  return (
    <div class="max-w-screen-md mx-auto p-4">
      <Show when={tree().length > 0} fallback={<p>Loading...</p>}>
        <For each={tree()}>{(root) => <CatNode node={root} />}</For>
      </Show>
    </div>
  );
}
