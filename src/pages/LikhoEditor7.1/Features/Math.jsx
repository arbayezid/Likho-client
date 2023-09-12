import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Math = () => {
  const [editorHtml, setEditorHtml] = useState(`
    <h1 style="text-align: center; color: blue;">Quadratic Formula</h1>
    <p>In elementary algebra, the quadratic formula is the solution of the quadratic equation:</p>
    <p style="text-align: center;">
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
          <mi>x</mi>
          <mo>=</mo>
          <mfrac>
            <mrow>
              <mo>-</mo>
              <mi>b</mi>
              <mo>±</mo>
              <msqrt>
                <mrow>
                  <msup><mi>b</mi><mn>2</mn></msup>
                  <mo>-</mo>
                  <mn>4ac</mn>
                </mrow>
              </msqrt>
            </mrow>
            <mrow><mn>2a</mn></mrow>
          </mfrac>
        </mrow>
      </math>
    </p>
    <h2 style="text-align: center; color: green;">Chemistry Formula</h2>
    <p>Water is made from two elements - Hydrogen and Oxygen. If you put the two gases together, along with energy, you can make water.</p>
    <p style="text-align: center;">
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
          <mn>2</mn>
          <msub><mi>H</mi><mn>2</mn></msub>
          <msub><mi>O</mi><mn>2</mn></msub>
          <mo>⇌</mo>
          <mn>2</mn>
          <msub><mi>H</mi><mn>2</mn></msub>
          <msub><mi>O</mi><mn>2</mn></msub>
        </mrow>
        <mo>l</mo>
      </math>
    </p>
    <h3 style="text-align: center; color: red;">Surface Area Formula</h3>
    <p>The entire formula for the surface area of a cylinder is:</p>
    <p style="text-align: center;">
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
          <mn>2</mn>
          <mi>πr</mi>
          <mn>2</mn>
          <mo>+</mo>
          <mn>2</mn>
          <mi>πrh</mi>
        </mrow>
      </math>
    </p>
  `);

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="bg-white">
      <ReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['align', 'color', 'size'],
            ['link', 'image', 'video'],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
          ],
        }}
      />
    </div>
  );
};

export default Math;
