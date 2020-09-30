export class StartPageLinks {
  public tab: string;
  public links: Links[];
}

export class Links {
  public header?: string;
  public urls: UrlPage[];

}

export class UrlPage {
  public subheader?: string;
  public suburls: SubUrls[];
  public fontColor?: string;
}

export class SubUrls {
  public url: string;
  public urlName: string;
  public backgroundColor?: string;
}
/*
export class StartPageLinks {
  public tab: string;
  public links: Links[];
}

export class Links {
  public header: string;
  public urls: UrlPage[];
}

export class UrlPage {
  public url: string;
  public urlName: string;
}

*/
