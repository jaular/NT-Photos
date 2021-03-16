import Item from "@/components/Item";
export default function Grid({ data }) {
  return (
    <>
      <ul
        className="grid grid-cols-2 gap-6 lg:grid-cols-5 lg:gap-x-8"
        x-max="1"
      >
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
