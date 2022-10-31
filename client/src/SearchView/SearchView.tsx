import React from 'react';
import { Sample, ViewProps } from "./../tools/Samples.model";

const SearchView = ( { samples }:ViewProps ) => {
    // setup state variables
    const [searchText, setSearchText] = React.useState<string>('');
    const [selected, setSelected] = React.useState<Sample[]>([]);

    const onSearch = () => {
        if(searchText){
            const filtered = samples.filter((sample: Sample) => {
                return sample.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
            });        
            console.log(filtered);
            setSelected(filtered);
        }else{
            setSelected([]);
        }
        
    }

    return (    
        <div className="flex flex-wrap flex-col">
            <div className="pr-5 pb-5 flex-col">
                <div><input type="text" className="text-[#035074] p-2 rounded-md" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/></div>
                <div className="mt-2"><input type="button" value="Search" 
                  onClick={onSearch} className="bg-white text-[#035074] p-2 rounded-md active:bg-[#EEAA40]" /></div>
            </div>
            {
              (selected.length > 0) ?
                <div className="flex flex-col flex-wrap">
                {selected.map((data:Sample,n:number) => {
                    return (
                        <div key={n} className="flex flex-nowrap mb-10">
                            <div className="mr-2.5">
                                <img src={"/images/" + data.images[0].filename} alt="Portfolio Sample" className="mr-1" />
                            </div>
                            <div>
                                <div className="font-title font-bold text-xl pb-2">{data.name}</div>
                                <div className="pb-2 max-w-[600px]">{data.description}</div>
                                <a href="{data.url}" className="hover:underline" target="_blank">{data.url}</a>
                            </div>
                        </div>
                    );
                })}
            </div>
           :
            <div className="pr-5 pb-5  flex flex-col">
            No matches found…
            </div>
         }
        </div>
    )
}

export default SearchView;