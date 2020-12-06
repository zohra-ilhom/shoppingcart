import _ from 'lodash';


export function paginate (filterCounters, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    return _(filterCounters).slice(startIndex).take(pageSize).value();
    
}





