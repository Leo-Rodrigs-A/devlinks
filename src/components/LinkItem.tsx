type LinkItemProps = {
  label: string;
  href: string;
  newTab?: boolean;
};

export default function LinkItem({
  label,
  href,
  newTab = true,
}: LinkItemProps) {
  return (
    <li>
      <a
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {label ? label : 'Sem descrição'}
      </a>
    </li>
  );
}
