import ReadMe from "../softwares/ReadMe";

export const apps: AppProps[] = [
  {
    title: "ReadMe",
    component: ReadMe,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrA4YtnKgUzN0N0YFF3IQOwH9QRHUjc5pdZbuc8jEo2UN81VykhKV8S9CitoNChoczwY&usqp=CAU",
    description: "Anand Pandit's Git Stats",
    resizable: true,
    defaultWidth: 800,
    defaultHeight: 600,
  },
];

export interface AppProps {
  title: string;
  component: React.FC;
  icon: string;
  description: string;
  resizable: boolean;
  defaultWidth: number;
  defaultHeight: number;
}
