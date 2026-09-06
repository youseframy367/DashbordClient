
import GridCart from "./sectionOne/gridCartes/gridCart"
import WorldMapUsers from "./sectionOne/mapWorled/WorldMapUsers"
import Table from "./sectionOne/table"
export default function BageStart (){
    return(
        <div className="w-auto">
            <GridCart/>
            <WorldMapUsers/>
            <Table/>
        </div>
    )
}