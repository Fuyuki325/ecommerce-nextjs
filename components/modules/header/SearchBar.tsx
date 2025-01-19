"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = ({
  openSearchBar,
  setOpenSearchBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const handleSearch = () => {
    // Call api
  }
  
  return (
    <Dialog open={openSearchBar}>
      <DialogContent className="lg:max-w-screen-lg z-[99999] [&>.closeBtn]:hidden">
        <div className="flex items-center w-ful gap-4">
          <Search className="text-slate-300" />
          <Input className="text-slate-500" placeholder="search any product here" onInput={handleSearch} />
          <Button onClick={() => setOpenSearchBar(!openSearchBar)} variant="outline" size="icon" className="hover:bg-primary-500 group">
            <X className="group-hover:text-white" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
