function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-green-100 w-full h-screen flex items-center justify-center flex-col gap-2">
      {children}
    </section>
  );
}

export default FormLayout;
