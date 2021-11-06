//Task 5
function friends_list(str){
    let list = str.toUpperCase().split(';').map(fr => [fr.split(':')[1], fr.split(':')[0]]);
    list = list.sort().map(fr =>  fr.join(', '));
    let sorted_list = "(" + list.join(')(') + ")";

    return sorted_list;
}
s = "Fred:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(friends_list(s))
