import spiritImg from "@/assets/spirit.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <img
          src={spiritImg}
          alt=""
          className="w-12 h-12 mx-auto mb-4 opacity-50"
          loading="lazy"
          width={512}
          height={512}
        />
        <p className="font-body text-sm text-muted-foreground">
          © 2026 Your Name. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground/60 mt-1">
          Built with modern web technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
