import Link from "next/link";
import { Head } from "../styles/common";

type gnbProps = {
  isOpen: boolean;
};

export default function Gnb({ isOpen }: gnbProps) {
  return (
    <Head.Nav isOpen={isOpen}>
      <ul>
        <li>
          <Link href="/project">
            <a>project</a>
          </Link>
        </li>
        <li>
          <Link href="/dev">
            <a>dev</a>
          </Link>
        </li>
      </ul>
    </Head.Nav>
  );
}
