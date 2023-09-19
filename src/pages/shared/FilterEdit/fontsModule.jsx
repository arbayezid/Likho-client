import { Quill } from "react-quill";

const fontsModule = () => {
    // Define the fonts you want to add
    const fonts = [
        'Arial',
        'Verdana',
        'Times New Roman',
        'Courier New',
        'Tahoma',
        'Georgia',
        'Trebuchet MS',
        'Arial Black',
        'Impact',
        // Add more fonts here
    ];

    // Create a font format for each font
    const fontFormats = fonts.map((font) => ({
        name: `font-${font.toLowerCase().replace(/ /g, '-')}`,
        label: font,
        font: font,
    }));

    // Register the font formats with Quill
    fontFormats.forEach((fontFormat) => {
        Quill.register(fontFormat, true);
    });

    return {
        // Add the 'font' button to the toolbar
        toolbar: {
            container: [
                [{ 'font': fontFormats.map((fontFormat) => fontFormat.name) }],
                // Add other toolbar options here
            ],
        },
    };
};

export default fontsModule;
