let first = /ca[r|t]/,
    second = /pr?op/,
    third = /ferr[et|y|ari]/,
    fourth = /ious\b/,
    fifth = /\s[.|,|:|;]/,
    sixth = /\w{7,}/,
    seventh = /\b[^\se]+\b/i;

verify(first,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(second,
       ["pop culture", "mad props"],
       ["plop"]);

verify(third,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(fourth,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(fifth,
       ["bad punctuation ."],
       ["escape the period"]);

verify(sixth,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(seventh,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
 for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}
