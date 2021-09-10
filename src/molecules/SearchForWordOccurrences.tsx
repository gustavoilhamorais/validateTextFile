import { ReactElement }     from "react";
import BtnSearchOccurrences from "../atoms/BtnSearchOccurrences";
import Label                from "../atoms/Label";

interface SearchForWordOccurrencesProps {
  search: string;
  content: string[];
  occurrences: number;
  setSearch(search: string): void;
  setIsLoading(isLoading: boolean): void;
  setOccurrences(occurrences: number): void;
}

const SearchForWordOccurrences = ({
  search,
  setSearch,
  occurrences,
  setOccurrences,
  setIsLoading,
  content,
}: SearchForWordOccurrencesProps): ReactElement => {
  return (
    <>
      <Label htmlFor="search-input">Procurar ocorrências no arquivo:</Label>
      <input
        type="text"
        value={search}
        id="search-input"
        placeholder="Pesquisa"
        onChange={(event) => setSearch(event.target.value)}
      />
      <BtnSearchOccurrences
        setOccurrences={setOccurrences}
        setIsLoading={setIsLoading}
        content={content}
        search={search}
      />
      <pre>Ocorrências: {occurrences}</pre>
    </>
  );
};

export default SearchForWordOccurrences;
