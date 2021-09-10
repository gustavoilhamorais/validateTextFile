import { ReactElement } from "react";

interface BtnSearchOccurrencesProps {
  search: string;
  content: string[];
  setIsLoading(isLoading: boolean): void;
  setOccurrences(occurrences: number): void;
}

const BtnSearchOccurrences = ({
  content,
  setIsLoading,
  search,
  setOccurrences,
}: BtnSearchOccurrencesProps): ReactElement => {
  function handleSearchBtnClick(): void {
    setIsLoading(true);
    const searchMatches: string[] = content.filter((domain: string) =>
      domain.match(search)
    );
    setOccurrences(searchMatches?.length);
    setIsLoading(false);
  }

  return (
    <input
      type="button"
      id="confirm-search-input"
      value="Buscar"
      onClick={handleSearchBtnClick}
    />
  );
};

export default BtnSearchOccurrences;
