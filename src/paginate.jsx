import _ from 'lodash';


export function paginate (counters, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    return _(counters).slice(startIndex).take(pageSize).value();
    
}





