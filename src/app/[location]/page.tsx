type Props = {
  params: {
    location: string;
  };
};

export default function Detail({ params }: Props) {
  return (
    <>
      <h1>Detail {params.location}</h1>
    </>
  );
}
