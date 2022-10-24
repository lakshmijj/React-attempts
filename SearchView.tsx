import React from 'react';
import { Sample, ViewProps } from "./../tools/Samples.model";

const SearchView = ( { samples }:ViewProps ) => {

    // setup state variables
    const [selected, setSelected] = React.useState<Sample>();

    return (    
        <div className="flex flex-wrap">
            <div className="pr-5 pb-5">
                <div><input type="text" className="text-[#035074] p-2 rounded-md" /></div>
                <div><input type="button" value="Search" className="bg-white text-[#035074] p-2 rounded-md active:bg-[#EEAA40]" /></div>
            </div>

            <div>
                <div id="txtName" className="font-title font-bold text-xl pb-3">{selected.name}</div>
                <div id="txtDescription" className="max-w-[600px] pb-3">{selected.description}</div>
                <div className="pb-4">
                    <a href="{selected.url}" target="_blank" id="lnkUrl" className="hover:underline">{selected.url}</a>
                </div>
                <div className="flex flex-nowrap">
                    {/* images are located in /public/images - URL is relative to /public when web app is running in browser */}
                    <img src={"/images/" + selected.images[0].filename} alt="Portfolio Sample" className="rounded-lg mr-1.5" />
                    <img src={"/images/" + selected.images[1].filename} alt="Portfolio Sample" className="rounded w-12 h-12 mr-1.5" />
                    <img src={"/images/" + selected.images[2].filename} alt="Portfolio Sample" className="rounded w-12 h-12 mr-1.5" />
                    <img src={"/images/" + selected.images[3].filename} alt="Portfolio Sample" className="rounded w-12 h-12 mr-1.5" />
                </div>
            </div>
        </div>
    )
}

export default SearchView;