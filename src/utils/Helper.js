export function filterData(searchText,restaurants){
    // console.log('hdhdhh'+JSON.stringify(restaurants));

return restaurants.filter((restuarant)=>restuarant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));

}

