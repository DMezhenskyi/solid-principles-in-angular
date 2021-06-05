export interface WidgetContent {
  id: string;
}

export interface Reloadable {
  reload: () => any;
  isLoading: boolean;
}
