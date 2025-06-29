// Example path: app/contact-us/page.js
'use client';
import React, { useState, useEffect } from 'react';
import styles from '../components/ContactUs.module.css'; // Assuming CSS module is in the same folder
import Whatsapp from '../components/Whatsapp';   // Adjust path if components are elsewhere
import Nav from '../components/Nav';             // Adjust path
import Footer from '../components/Footer';         // Adjust path

function ContactUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    // If you were to handle form submission with client-side JavaScript (e.g., using fetch):
    // e.preventDefault();
    // console.log("Form submission handled by JavaScript");
    // // Add your fetch logic here
    // setLoading(true);
    // // ... after fetch completes ...
    // // setLoading(false);

    // For native HTML form submission (which is what happens with 'action' attribute):
    setLoading(true);
    // The browser will navigate to the 'action' URL.
  };

  return (
    <>
      <Nav />
      <Whatsapp />

      <div className={styles.contact_us_2}>
        <div className={`${styles["responsive-container-block"]} ${styles["big-container"]}`}>
          <div className={styles.blueBG}></div>
          <div className={`${styles["responsive-container-block"]} ${styles.container}`}>
            {/* Contact Info */}
            <div className={styles["contact-info"]}>
              <p className={styles["contact-details"]}>
                <span>Email:</span> <a href="mailto:sunilgupta@aanyasolutions.net">sunilgupta@aanyasolutions.net</a>
              </p>
              <p className={styles["contact-details"]}>
                <span>Phone:</span> <a href="tel:+918368859076">+91 8368859076</a>
              </p>
            </div>

            {/* Contact Form */}
            <form
              className={styles["form-box"]}
              action="https://formsubmit.co/sunilgupta@aanyasolutions.net"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className={`${styles["container-block"]} ${styles["form-wrapper"]}`} id="contact">
                <p className={`${styles["text-blk"]} ${styles["contactus-head"]}`}>Contact Us</p>

                <div className={styles["responsive-container-block"]}>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-6"]}`}>
                    <p className={`${styles["text-blk"]} ${styles["input-title"]}`}>NAME</p>
                    <input
                      className={styles.input}
                      type="text"
                      name="name"
                      placeholder="Please enter first name..."
                      required
                    />
                  </div>

                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
                    <p className={`${styles["text-blk"]} ${styles["input-title"]}`}>EMAIL</p>
                    <input
                      className={styles.input}
                      type="email"
                      name="email"
                      placeholder="Please enter email..."
                      required
                    />
                  </div>

                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
                    <p className={`${styles["text-blk"]} ${styles["input-title"]}`}>COUNTRY CODE</p>
                    <select
                      id="countryCode"
                      name="countryCode"
                      className={styles.input}
                      required
                      defaultValue="" // For uncontrolled select with placeholder
                    >
                      <option value="" disabled hidden style={{ color: "#a19d9d" }} >
                        Select Country
                      </option>
                      <option value="93">Afghanistan (+93)</option>
                      <option value="358">Åland Islands (+358)</option>
                      <option value="355">Albania (+355)</option>
                      <option value="213">Algeria (+213)</option>
                      <option value="1">American Samoa (+1)</option>
                      <option value="376">Andorra (+376)</option>
                      <option value="244">Angola (+244)</option>
                      <option value="1">Anguilla (+1)</option>
                      <option value="672">Antarctica (+672)</option>
                      <option value="1">Antigua and Barbuda (+1)</option>
                      <option value="54">Argentina (+54)</option>
                      <option value="374">Armenia (+374)</option>
                      <option value="297">Aruba (+297)</option>
                      <option value="61">Australia (+61)</option>
                      <option value="43">Austria (+43)</option>
                      <option value="994">Azerbaijan (+994)</option>
                      <option value="1">Bahamas (+1)</option>
                      <option value="973">Bahrain (+973)</option>
                      <option value="880">Bangladesh (+880)</option>
                      <option value="1">Barbados (+1)</option>
                      <option value="375">Belarus (+375)</option>
                      <option value="32">Belgium (+32)</option>
                      <option value="501">Belize (+501)</option>
                      <option value="229">Benin (+229)</option>
                      <option value="1">Bermuda (+1)</option>
                      <option value="975">Bhutan (+975)</option>
                      <option value="591">Bolivia (+591)</option>
                      <option value="387">Bosnia and Herzegovina (+387)</option>
                      <option value="267">Botswana (+267)</option>
                      <option value="55">Bouvet Island (+55)</option>
                      <option value="55">Brazil (+55)</option>
                      <option value="246">British Indian Ocean Territory (+246)</option>
                      <option value="673">Brunei Darussalam (+673)</option>
                      <option value="359">Bulgaria (+359)</option>
                      <option value="226">Burkina Faso (+226)</option>
                      <option value="257">Burundi (+257)</option>
                      <option value="238">Cabo Verde (+238)</option>
                      <option value="855">Cambodia (+855)</option>
                      <option value="237">Cameroon (+237)</option>
                      <option value="1">Canada (+1)</option>
                      <option value="599">Caribbean Netherlands (+599)</option>
                      <option value="1">Cayman Islands (+1)</option>
                      <option value="236">Central African Republic (+236)</option>
                      <option value="235">Chad (+235)</option>
                      <option value="56">Chile (+56)</option>
                      <option value="86">China (+86)</option>
                      <option value="61">Christmas Island (+61)</option>
                      <option value="61">Cocos (Keeling) Islands (+61)</option>
                      <option value="57">Colombia (+57)</option>
                      <option value="269">Comoros (+269)</option>
                      <option value="242">Congo (+242)</option>
                      <option value="243">Congo, Democratic Republic of the (+243)</option>
                      <option value="682">Cook Islands (+682)</option>
                      <option value="506">Costa Rica (+506)</option>
                      <option value="385">Croatia (+385)</option>
                      <option value="53">Cuba (+53)</option>
                      <option value="599">Curaçao (+599)</option>
                      <option value="357">Cyprus (+357)</option>
                      <option value="420">Czech Republic (+420)</option>
                      <option value="225">Côte d'Ivoire (+225)</option>
                      <option value="45">Denmark (+45)</option>
                      <option value="253">Djibouti (+253)</option>
                      <option value="1">Dominica (+1)</option>
                      <option value="1">Dominican Republic (+1)</option>
                      <option value="593">Ecuador (+593)</option>
                      <option value="20">Egypt (+20)</option>
                      <option value="503">El Salvador (+503)</option>
                      <option value="240">Equatorial Guinea (+240)</option>
                      <option value="291">Eritrea (+291)</option>
                      <option value="372">Estonia (+372)</option>
                      <option value="268">Eswatini (Swaziland) (+268)</option>
                      <option value="251">Ethiopia (+251)</option>
                      <option value="500">Falkland Islands (Malvinas) (+500)</option>
                      <option value="298">Faroe Islands (+298)</option>
                      <option value="679">Fiji (+679)</option>
                      <option value="358">Finland (+358)</option>
                      <option value="33">France (+33)</option>
                      <option value="594">French Guiana (+594)</option>
                      <option value="689">French Polynesia (+689)</option>
                      <option value="262">French Southern Territories (+262)</option>
                      <option value="241">Gabon (+241)</option>
                      <option value="220">Gambia (+220)</option>
                      <option value="995">Georgia (+995)</option>
                      <option value="49">Germany (+49)</option>
                      <option value="233">Ghana (+233)</option>
                      <option value="350">Gibraltar (+350)</option>
                      <option value="30">Greece (+30)</option>
                      <option value="299">Greenland (+299)</option>
                      <option value="1">Grenada (+1)</option>
                      <option value="590">Guadeloupe (+590)</option>
                      <option value="1">Guam (+1)</option>
                      <option value="502">Guatemala (+502)</option>
                      <option value="44">Guernsey (+44)</option>
                      <option value="224">Guinea (+224)</option>
                      <option value="245">Guinea-Bissau (+245)</option>
                      <option value="592">Guyana (+592)</option>
                      <option value="509">Haiti (+509)</option>
                      <option value="61">Heard Island and McDonald Islands (+61)</option>
                      <option value="504">Honduras (+504)</option>
                      <option value="852">Hong Kong (+852)</option>
                      <option value="36">Hungary (+36)</option>
                      <option value="354">Iceland (+354)</option>
                      <option value="91">India (+91)</option>
                      <option value="62">Indonesia (+62)</option>
                      <option value="98">Iran (+98)</option>
                      <option value="964">Iraq (+964)</option>
                      <option value="353">Ireland (+353)</option>
                      <option value="44">Isle of Man (+44)</option>
                      <option value="972">Israel (+972)</option>
                      <option value="39">Italy (+39)</option>
                      <option value="1">Jamaica (+1)</option>
                      <option value="81">Japan (+81)</option>
                      <option value="44">Jersey (+44)</option>
                      <option value="962">Jordan (+962)</option>
                      <option value="7">Kazakhstan (+7)</option>
                      <option value="254">Kenya (+254)</option>
                      <option value="686">Kiribati (+686)</option>
                      <option value="850">Korea, North (+850)</option>
                      <option value="82">Korea, South (+82)</option>
                      <option value="383">Kosovo (+383)</option>
                      <option value="965">Kuwait (+965)</option>
                      <option value="996">Kyrgyzstan (+996)</option>
                      <option value="856">Lao People's Democratic Republic (+856)</option>
                      <option value="371">Latvia (+371)</option>
                      <option value="961">Lebanon (+961)</option>
                      <option value="266">Lesotho (+266)</option>
                      <option value="231">Liberia (+231)</option>
                      <option value="218">Libya (+218)</option>
                      <option value="423">Liechtenstein (+423)</option>
                      <option value="370">Lithuania (+370)</option>
                      <option value="352">Luxembourg (+352)</option>
                      <option value="853">Macao (+853)</option>
                      <option value="389">Macedonia North (+389)</option>
                      <option value="261">Madagascar (+261)</option>
                      <option value="265">Malawi (+265)</option>
                      <option value="60">Malaysia (+60)</option>
                      <option value="960">Maldives (+960)</option>
                      <option value="223">Mali (+223)</option>
                      <option value="356">Malta (+356)</option>
                      <option value="692">Marshall Islands (+692)</option>
                      <option value="596">Martinique (+596)</option>
                      <option value="222">Mauritania (+222)</option>
                      <option value="230">Mauritius (+230)</option>
                      <option value="262">Mayotte (+262)</option>
                      <option value="52">Mexico (+52)</option>
                      <option value="691">Micronesia (+691)</option>
                      <option value="373">Moldova (+373)</option>
                      <option value="377">Monaco (+377)</option>
                      <option value="976">Mongolia (+976)</option>
                      <option value="382">Montenegro (+382)</option>
                      <option value="1">Montserrat (+1)</option>
                      <option value="212">Morocco (+212)</option>
                      <option value="258">Mozambique (+258)</option>
                      <option value="95">Myanmar (Burma) (+95)</option>
                      <option value="264">Namibia (+264)</option>
                      <option value="674">Nauru (+674)</option>
                      <option value="977">Nepal (+977)</option>
                      <option value="31">Netherlands (+31)</option>
                      <option value="599">Netherlands Antilles (+599)</option>
                      <option value="687">New Caledonia (+687)</option>
                      <option value="64">New Zealand (+64)</option>
                      <option value="505">Nicaragua (+505)</option>
                      <option value="227">Niger (+227)</option>
                      <option value="234">Nigeria (+234)</option>
                      <option value="683">Niue (+683)</option>
                      <option value="672">Norfolk Island (+672)</option>
                      <option value="1">Northern Mariana Islands (+1)</option>
                      <option value="47">Norway (+47)</option>
                      <option value="968">Oman (+968)</option>
                      <option value="92">Pakistan (+92)</option>
                      <option value="680">Palau (+680)</option>
                      <option value="970">Palestine (+970)</option>
                      <option value="507">Panama (+507)</option>
                      <option value="675">Papua New Guinea (+675)</option>
                      <option value="595">Paraguay (+595)</option>
                      <option value="51">Peru (+51)</option>
                      <option value="63">Philippines (+63)</option>
                      <option value="64">Pitcairn Islands (+64)</option>
                      <option value="48">Poland (+48)</option>
                      <option value="351">Portugal (+351)</option>
                      <option value="1">Puerto Rico (+1)</option>
                      <option value="974">Qatar (+974)</option>
                      <option value="262">Reunion (+262)</option>
                      <option value="40">Romania (+40)</option>
                      <option value="7">Russian Federation (+7)</option>
                      <option value="250">Rwanda (+250)</option>
                      <option value="590">Saint Barthelemy (+590)</option>
                      <option value="290">Saint Helena (+290)</option>
                      <option value="1">Saint Kitts and Nevis (+1)</option>
                      <option value="1">Saint Lucia (+1)</option>
                      <option value="590">Saint Martin (+590)</option>
                      <option value="508">Saint Pierre and Miquelon (+508)</option>
                      <option value="1">Saint Vincent and the Grenadines (+1)</option>
                      <option value="685">Samoa (+685)</option>
                      <option value="378">San Marino (+378)</option>
                      <option value="239">Sao Tome and Principe (+239)</option>
                      <option value="966">Saudi Arabia (+966)</option>
                      <option value="221">Senegal (+221)</option>
                      <option value="381">Serbia (+381)</option>
                      {/* <option value="381">Serbia and Montenegro (+381)</option> Value is duplicate, typically choose one representation */}
                      <option value="248">Seychelles (+248)</option>
                      <option value="232">Sierra Leone (+232)</option>
                      <option value="65">Singapore (+65)</option>
                      <option value="1">Sint Maarten (+1)</option>
                      <option value="421">Slovakia (+421)</option>
                      <option value="386">Slovenia (+386)</option>
                      <option value="677">Solomon Islands (+677)</option>
                      <option value="252">Somalia (+252)</option>
                      <option value="27">South Africa (+27)</option>
                      <option value="500">South Georgia and the South Sandwich Islands (+500)</option>
                      <option value="211">South Sudan (+211)</option>
                      <option value="34">Spain (+34)</option>
                      <option value="94">Sri Lanka (+94)</option>
                      <option value="249">Sudan (+249)</option>
                      <option value="597">Suriname (+597)</option>
                      <option value="47">Svalbard and Jan Mayen (+47)</option>
                      <option value="46">Sweden (+46)</option>
                      <option value="41">Switzerland (+41)</option>
                      <option value="963">Syria (+963)</option>
                      <option value="886">Taiwan (+886)</option>
                      <option value="992">Tajikistan (+992)</option>
                      <option value="255">Tanzania (+255)</option>
                      <option value="66">Thailand (+66)</option>
                      <option value="670">Timor-Leste (+670)</option>
                      <option value="228">Togo (+228)</option>
                      <option value="690">Tokelau (+690)</option>
                      <option value="676">Tonga (+676)</option>
                      <option value="1">Trinidad and Tobago (+1)</option>
                      <option value="216">Tunisia (+216)</option>
                      <option value="90">Turkey (Türkiye) (+90)</option>
                      <option value="993">Turkmenistan (+993)</option>
                      <option value="1">Turks and Caicos Islands (+1)</option>
                      <option value="688">Tuvalu (+688)</option>
                      <option value="1">U.S. Outlying Islands (+1)</option>
                      <option value="256">Uganda (+256)</option>
                      <option value="380">Ukraine (+380)</option>
                      <option value="971">United Arab Emirates (+971)</option>
                      <option value="44">United Kingdom (+44)</option>
                      <option value="1">United States (+1)</option>
                      <option value="598">Uruguay (+598)</option>
                      <option value="998">Uzbekistan (+998)</option>
                      <option value="678">Vanuatu (+678)</option>
                      <option value="39">Vatican City Holy See (+39)</option>
                      <option value="58">Venezuela (+58)</option>
                      <option value="84">Vietnam (+84)</option>
                      <option value="1">Virgin Islands, British (+1)</option>
                      <option value="1">Virgin Islands, U.S (+1)</option>
                      <option value="681">Wallis and Futuna (+681)</option>
                      <option value="212">Western Sahara (+212)</option>
                      <option value="967">Yemen (+967)</option>
                      <option value="260">Zambia (+260)</option>
                      <option value="263">Zimbabwe (+263)</option>
                    </select>
                  </div>

                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
                    <p className={`${styles["text-blk"]} ${styles["input-title"]}`}>PHONE NUMBER</p>
                    <input
                      className={styles.input}
                      type="tel"
                      name="phone"
                      placeholder="Please enter phone number..."
                      required
                    />
                  </div>

                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-12"]} ${styles["wk-ipadp-12"]}`}>
                    <p className={`${styles["text-blk"]} ${styles["input-title"]}`}> REQUIREMENT</p>
                    <textarea
                      className={styles.textinput}
                      name="requirement"
                      placeholder="Please enter your requirement...(Optional)"
                    ></textarea>
                  </div>
                </div>

                {loading ? (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
                    <div className="spinner-border text-primary" role="status"> {/* Ensure Bootstrap classes are available */}
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <button type="submit" className={styles["submit-btn"]}>Submit</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUsPage;