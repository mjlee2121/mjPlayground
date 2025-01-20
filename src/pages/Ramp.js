import React, {useEffect} from 'react'
import { Editor } from '@monaco-editor/react';
import { useNavigate } from 'react-router-dom';

const Ramp = () => {
  const navigate = useNavigate()
  
  const navigateToHome = () =>{
    navigate('/')
  }
  
  useEffect(()=>{
      // Setting the background color
      document.body.classList.add('universal-bg')
      return ()=>{
        document.body.classList.remove('universal-bg')
      }
    },[])
  

  const solutionCodes = `
    import "./styles.css";
    import React, { useEffect, useState } from "react";

    function App() {
      const [flag, setFlag] = useState("");
      const [loading, setLoading] = useState(true);
      const [displayedFlag, setDisplayedFlag] = useState("");

      useEffect(() => {
        // Fetch the flag
        const fetchFlag = async () => {
          const response = await fetch("<INSERT_EXTRACTED_URL_HERE>");
          const text = await response.text();
          setFlag(text);
          setLoading(false);
        };

        fetchFlag();
      }, []);

      useEffect(() => {
        if (!loading && flag) {
          let index = 0;

          const interval = setInterval(() => {
            setDisplayedFlag((prev) => prev + flag[index]);
            index++;

            if (index === flag.length) clearInterval(interval);
          }, 500); // 0.5-second delay between characters
        }
      }, [loading, flag]);

      return (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {displayedFlag.split("").map((char, index) => (
                <li key={index}>{char}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    // Bonus: Script used to extract the hidden URL
    /*
    const elements = document.querySelectorAll("code[data-class^='23'] > div[data-tag$='93'] > span[data-id*='21'] > i.char");
    const url = Array.from(elements)
      .map((el) => el.getAttribute("value"))
      .join("");
    console.log("Extracted URL:", url);
    */

    export default App;

  `
  return (
    <div>
      <h1>
        Ramp Challenge
      </h1>
      <h2>Instructions</h2>
      <p>
      

      1. Open this [link](https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge) <br />
      2. Find a hidden URL within the HTML<br />
        - Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.<br />
        - The asterisk **(\*)** is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result and should be ignored.<br />
        - There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.<br />
        - Any additional attribute that doesn't interfere with the described pattern can be safely ignored.<br />

      Pattern of the DOM tree for each valid character of the URL<br /><br />

      <code data-class="23*">
        <div data-tag="*93">
          <span data-id="*21*">
            <i class="char" value="VALID_CHARACTER"></i>
          </span>
        </div>
      </code>
     
     <div style={{border:'2px', background:'grey'}}>
     &lt;code data-class=&quot;23*&quot;&gt; <br/>
    &lt;div data-tag=&quot;*93&quot;&gt;<br/>
    &lt;span data-id=&quot;*21*&quot;&gt;<br/>
    &lt;i class=&quot;char&quot; value=&quot;VALID_CHARACTER&quot;&gt;&lt;/i&gt;<br/>
    &lt;/span&gt;<br/>
    &lt;/div&gt;<br/>
    &lt;/code&gt;<br/>
     </div>
      
      <br />
      (_To validate this step, you should be able to open the URL and get an English word. This means you have captured the flag!_ 🥳)<br /><br />

      3. Create a CodeSandbox React application<br />
      4. Make an HTTP request to URL obtained in step 2 to load the flag into a React component<br />
        - Don't use any external libraries. Use browser APIs<br />
        - Render a "Loading..." text while the request is ongoing<br />
      5. Render the flag you loaded in step 4 with the following conditions:<br />
        - Simulate a typewriter effect with a half second delay between each character. _Start showing nothing and then display characters one by one until the full string is displayed._<br />
        - No style required<br />
        - Render the flag a list, where each character is a list item<br />
        - Animation should trigger after you load the flag<br />
        - Animation should run only once<br />
        - Use React APIs only. Don't use CSS or external libraries<br />

      Bonus: Add as a comment the script you used to to get the URL in step 2<br /><br />
      </p>
      
      <h2>
        Submission<br />
      </h2>

      <p>
      Paste the flag you captured in step 2 and the link to your CodeSandbox in the job application with the following format:<br />

      &lt;FLAG&gt; - &lt;LINK&gt;<br />

      We're aware answers here might eventually be leaked and we'll probably have to refresh this every couple months or so, but please keep in mind it'll be very easy to tell once that happens and will only result in slowing down our ability to process applications - so please keep the result to yourself.<br /><br />
      </p>

      <Editor 
          height='70vh' 
          width='100vw' 
          theme='vs-dark'
          options={{
            fontSize:14,
            minimap:{
              enabled: false
            }
          }}
          defaultLanguage='python' 
          defaultValue={solutionCodes}
      />

      <button className='navigate-button' onClick={navigateToHome}>Go to Home</button>

    </div>
    
  )
}

export default Ramp