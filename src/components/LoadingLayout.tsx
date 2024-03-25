function LoadingLayout({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean;
}) {
  return isLoading ? <section>Cargando...</section> : <>{children}</>;
}

export default LoadingLayout;
