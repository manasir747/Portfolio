import { PageContainer } from "@/components/layout/PageContainer";

export default function Home() {
  return (
    <PageContainer className="py-12 md:py-24 lg:py-32">
      <section className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Welcome to my Portfolio
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            This is the foundation of the portfolio. Sections will be built out later.
          </p>
        </div>
      </section>
    </PageContainer>
  );
}
