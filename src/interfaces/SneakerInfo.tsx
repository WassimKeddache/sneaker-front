interface SneakerInfo {
  id: number;
  name: string;
  imageUrl: string;
  releaseDate: string;
  category: string;
  goatPrice: number;
}

interface SneakerInformationProps {
  sneakerData: SneakerInfo;
}
