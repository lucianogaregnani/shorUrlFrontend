function ErrorLayout({
  children,
  error,
  changeError,
}: {
  children: React.ReactNode;
  error: string;
  changeError: (newError: string) => void;
}) {
  const resetError = () => {
    changeError("");
  };

  return error ? (
    <section>
      <span>{error}</span>
      <button onClick={resetError}>Reset</button>
    </section>
  ) : (
    <>{children}</>
  );
}

export default ErrorLayout;
