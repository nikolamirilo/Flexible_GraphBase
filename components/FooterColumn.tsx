import Link from "next/link";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col font-normal gap-2">
        {links?.map((link, idx) => (
          <Link href="/" key={idx}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default FooterColumn;
