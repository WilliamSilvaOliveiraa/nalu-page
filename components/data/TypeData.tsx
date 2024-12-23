type Alignment = "left" | "center" | "right";

interface Tab {
  title: string;
  quantity: number;
  checked: boolean;
  special: boolean;
}

interface Column {
  header: string;
  ref: string;
  alignment: Alignment;
  ordering: boolean;
}

interface Variation {
  id: number;
  code: string;
  name: string;
  price: number;
  stock: number;
}

interface TableItem {
  id: number;
  code: string;
  name: string;
  price: number;
  stock: number;

  variations?: Variation[];
}

interface TableInfo {
  columns: Column[];
  items: TableItem[];
}

export interface TableData {
  tabs?: Tab[];
  tableInfo: TableInfo;
}
