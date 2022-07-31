declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "react-notifications" {
  export const NotificationContainer: VFC;
  export const NotificationManager = {
    success: (info: string) => info,
    error: (info: string) => info,
  };
}
