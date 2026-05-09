export default function BlogTeaser() {
  return (
    <section
      aria-labelledby="blog-heading"
      className="page-container mt-12 scroll-mt-24 pb-8 lg:mt-20 lg:scroll-mt-28"
      id="blog"
    >
      <div className="sketch-border mx-auto max-w-xl bg-paper/90 p-8 text-center shadow-sm">
        <h2
          className="crayon-text font-hand text-3xl text-ink sm:text-4xl"
          id="blog-heading"
        >
          Blog
        </h2>
        <p className="mt-4 font-body text-lg text-ink/75">
          Writing is on the way — deep dives on building reliable software,
          performance, and turning messy ideas into shipped products.
        </p>
      </div>
    </section>
  );
}
