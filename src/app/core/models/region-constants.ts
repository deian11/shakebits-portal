type Region = {
    regionCode: string;
    regionName: string;
}

export const regions: { [key: string]: Region } = {};

regions['en'] = {
    regionCode: 'en',
    regionName: 'English'
};
regions['ro'] = {
    regionCode: 'ro',
    regionName: 'Romanian'
};
regions['fr'] = {
    regionCode: 'fr',
    regionName: 'French'
};

regions['de'] = {
    regionCode: 'de',
    regionName: 'German'
};
regions['it'] = {
    regionCode: 'it',
    regionName: 'Italian'
};
regions['es'] = {
    regionCode: 'es',
    regionName: 'Spanish'
};

regions['no'] = {
    regionCode: 'no',
    regionName: 'Norwegian'
};
regions['fi'] = {
    regionCode: 'fi',
    regionName: 'Finnish'
};
regions['et'] = {
    regionCode: 'et',
    regionName: 'Estonian'
};

regions['lt'] = {
    regionCode: 'lt',
    regionName: 'Lithuanian'
};
regions['lv'] = {
    regionCode: 'lv',
    regionName: 'Latvian'
};
regions['el'] = {
    regionCode: 'el',
    regionName: 'Greek'
};

regions['sv'] = {
    regionCode: 'sv',
    regionName: 'Swedish'
};
regions['nl'] = {
    regionCode: 'nl',
    regionName: 'Dutch'
};
regions['pt'] = {
    regionCode: 'pt',
    regionName: 'Portuguese'
};

regions['sl'] = {
    regionCode: 'sl',
    regionName: 'Slovenian'
};
regions['sk'] = {
    regionCode: 'sk',
    regionName: 'Slovakian'
};
regions['sr'] = {
    regionCode: 'sr',
    regionName: 'Serbian'
};

regions['tr'] = {
    regionCode: 'tr',
    regionName: 'Turkish'
};
regions['uk'] = {
    regionCode: 'uk',
    regionName: 'Ukrainian'
};
regions['pl'] = {
    regionCode: 'pl',
    regionName: 'Polish'
};

regions['is'] = {
    regionCode: 'is',
    regionName: 'Icelandic'
};
regions['hu'] = {
    regionCode: 'hu',
    regionName: 'Hungarian'
};
regions['mt'] = {
    regionCode: 'mt',
    regionName: 'Maltese'
};


export const regionsCodes: Array<string> = [
    "cs", "de", "ee", 
    "el", "es", "fi", 
    "fr", "hu", "is", 
    "it", "lt", "lv", 
    "mt", "nl", "no", 
    "pl", "pt", "ro", 
    "se", "si", "sk", 
    "sr", "tr", "uk"
];

