import LinkItem from '@/components/LinkItem';

export default function Links() {
  return (
    <ul className="flex flex-col items-center gap-2">
      <LinkItem label="Meu Site" href="https://seu-site.com" />
      <LinkItem label="Portfólio" href="https://seu-portfolio.com" />
    </ul>
  );
}
