import Row from "@/components/custom/Row";
import { Button } from "@/components/ui/button";
import React from "react";
import { CiSearch } from "react-icons/ci";
import SearchBar from "@/components/modules/header/SearchBar";

const IconsGroups = ({
  openSearchBar,
  setOpenSearchBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <section>
      <Row className="">
        <SearchBar
          openSearchBar={openSearchBar}
          setOpenSearchBar={setOpenSearchBar}
        />
        <Button variant="nostyle" size="icon" onClick={() => setOpenSearchBar(!openSearchBar)}>
          <CiSearch size={32} className="hover:text-primary-700" />
        </Button>
      </Row>
    </section>
  );
};

export default IconsGroups;
