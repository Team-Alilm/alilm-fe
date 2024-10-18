import { editEmailTitle } from './index.css';

interface PageTitleProps {
  text: string;
}

const PageTitle = ({ text }: PageTitleProps) => {
  return <p className={editEmailTitle}>{text}</p>;
};

export default PageTitle;
