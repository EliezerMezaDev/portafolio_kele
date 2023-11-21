export interface job {
  name: string;
  client: string;
  description: string;
  date: string;
  rol: string;
  link?: string;
  tags: string[];
  source: Source;
}

interface Source {
  main: Main;
  others: string[];
}

interface Main {
  view: View;
  label: string;
}

interface View {
  front: string;
  back: string;
}
