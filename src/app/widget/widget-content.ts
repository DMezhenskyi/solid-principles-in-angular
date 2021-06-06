export interface WidgetContent {
  id: string;
}
export interface Reloadable {
  loading: boolean;
  reload(): void;
}
