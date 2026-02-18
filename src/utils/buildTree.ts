export interface CatData {
  id: string;
  name: string;
  avatarUrl?: string;
  parentId?: string | null;
}

export interface CatNode extends CatData {
  children: CatNode[];
}

/**
 * Convert a flat array of cats into a nested tree structure.
 * @param data Flat array of cat objects. If parentId is missing or invalid, node will be treated as root.
 */
export function buildTree(data: CatData[]): CatNode[] {
  const map = new Map<string, CatNode>();

  // First pass: create nodes without children
  data.forEach((cat) => {
    map.set(cat.id, { ...cat, children: [] });
  });

  const roots: CatNode[] = [];

  // Second pass: link parents to children
  map.forEach((node) => {
    if (node.parentId && map.has(node.parentId)) {
      const parent = map.get(node.parentId)!;
      parent.children.push(node);
    } else {
      roots.push(node); // No valid parent, treat as root
    }
  });

  return roots;
}
