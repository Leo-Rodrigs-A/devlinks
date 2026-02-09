import LinkItem from '@/components/LinkItem';

export default function Links() {
  return (
    <ul className="flex flex-col items-center gap-2">
      <LinkItem label="Meu Site" href="https://devleonardo.com.br/" />
      <LinkItem label="Portfólio" href="https://www.behance.net/-lrdesign-" />
      <LinkItem
        label="Precificar Bordados"
        href="https://leo-rodrigs-a.github.io/Calculadora-Bordado-Local/"
      />
    </ul>
  );
}
