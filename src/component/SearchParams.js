import { useSearchParams } from "react-router-dom";

export default function SearchParams() {
    let products = ["iphone 13 pro", "iphone 12", "Galaxy s22"];
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div hidden={<SearchParams></SearchParams>}>
            <input
                value={searchParams.get("filter") || ""}
                onChange={event => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    } else {
                        setSearchParams({});
                    }
                }}
            />
            {products
                .filter(product => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = product.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
        </div>
    );
}
