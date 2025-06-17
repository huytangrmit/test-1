document.addEventListener('DOMContentLoaded', () => {

    const templates = {
        TBS: {
            header: `
<div id="emble-customise-7d97b62b" class="customise emble emble-banner emble-prevent-insert emble-prevent-delete-recursive emble-banner-theme-rmit-light" style="padding: 0px; margin: 0px;" title="embedded content" data-context-menu="customise delete" data-customise="new-banner-theme" data-emble-name="Banner" data-emble-version="2.0">
    <div>
        <div style="display: grid; grid-template-columns: repeat(20,1fr); grid-auto-rows: 1fr; height: auto;">
            <div style="grid-column: 1/21; grid-row: 1/12; z-index: 1; height: 100%; overflow: hidden; position: relative;">
                <div style="width: 1040px; height: 100%;"><img style="display: block; min-height: 100%; width: 1040px; top: 0; left: 0;" role="presentation;" src="{{bannerImageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="{{bannerImageEndpoint}}" /></div>
            </div>
            <h2 style="grid-column: 2/20; grid-row: 4/10; z-index: 3; max-width: 100%;"><span style="vertical-align: middle; display: inline-block; text-align: left; color: #222160; text-decoration: none; font-family: museo700; font-size: 32pt;"><span class="stem-header-box-decoration-break" style="background-color: #e3e5e0; padding: 3px 15px; font-size: 32pt;">{{courseName}}</span></span><br /><span style="color: #ffffff; font-family: museo300;"><span style="font-size: 16px; background-color: #e61e2a; padding: 3px 15px;"><strong>{{courseCode}} | {{schoolName}}</strong></span></span></h2>
            <div class="emble-banner-accent" style="z-index: 2; grid-row: 10/12;">
                <div class="ribbon" style="grid-row: 10/12;"><img class="pixel-regular" src="{{ribbonImageSrc}}" data-api-endpoint="{{ribbonImageEndpoint}}" data-api-returntype="File" /></div>
            </div>
        </div>
    </div>
</div>
<p class="narrow-p"> </p>
<table class="stem-bg-shadow" style="border-collapse: collapse; width: 100%; margin-left: auto; margin-right: auto; border: 1px solid #f1f2f3; border-top: 5px solid #222160;" role="presentation" cellpadding="10px">
    <tbody>
        <tr>
            <td style="width: 100%; padding: 20px;">
                <p><span dir="ltr">{{coursePromise}}</span></p>
                <p><span><span class="TextRun SCXW24004924 BCX0" lang="EN-AU" data-contrast="auto"><span class="NormalTextRun SCXW24004924 BCX0">This Canvas course site will provide activities and materials to help you learn. You will also submit your <a class="inline_disabled" href="{{courseLink}}/assignments">assessments</a> here. If you're not sure how to do something, check out our <a class="inline_disabled" href="{{courseLink}}/pages/getting-help#canvas">help with Canvas</a>. </span></span></span></p>
                <p>This course includes various interactive activities. If you're using a screen reader for the first time, refer to the <a class="inline_disabled" href="/courses/101397/pages/interactive-activity-instructions" target="_blank" rel="noopener">Interactive Activity Instructions</a> for guidance.</p>
                <p id="emble-customise-5e591084" class="btn emble-btn customise emble-prevent-delete-recursive btn-blue" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a> <i class="icon-none"></i></a> <a class="inline_disabled" title="Link" href="{{courseLink}}/modules/items/5085615">Getting Started</a></p>
                <span> </span>
                <p id="emble-customise-228a2824" class="btn emble-btn btn-blue customise emble-prevent-delete-recursive" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a><i class="icon-none"> </i></a><a class="inline_disabled" title="Link" href="http://www1.rmit.edu.au/browse;ID=msrkgrf8e6ef1" target="_blank" rel="noopener">Course Guide </a></p>
                <span> </span>
                <p id="emble-customise-228a2824" class="btn emble-btn btn-blue customise emble-prevent-delete-recursive" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a><i class="icon-none"> </i></a><a class="inline_disabled" title="Link" href="{{courseLink}}/modules/items/5085621">Digital Class Links</a></p>
            </td>
        </tr>
    </tbody>
</table>`,
            moduleTemplate12: `
<div class="col-xs-12 col-lg-4" style="margin-top: 30px;">
    <div id="1" style="display: table; height: 100%; border-bottom: 3px solid #222160;">
        <div style="display: table-row;">
            <div style="display: table-cell; background-color: #f0f1ef;"><img id="19447393" role="presentation" src="{{imageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="{{imageEndpoint}}" /></div>
        </div>
        <div style="display: table-row;">
            <div style="display: table-cell; height: 100%; background-color: #f0f1ef; text-decoration: none; padding: 0px 20px 0px 20px; text-align: left;">
                <h3><a class="inline_disabled" style="text-decoration: none;" href="{{moduleLink}}" data-api-endpoint="{{moduleEndpoint}}" data-api-returntype="Page"><span style="font-size: 16pt; color: #222160; font-family: museo500; border-bottom: 3px solid #222160;"><span>{{moduleNumber}}. {{moduleName}}</span></span></a></h3>
                <p><span class="ui-provider fz b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">{{topicAndContentAreas}}</span></p>
            </div>
        </div>
    </div>
</div>`,
            moduleTemplate8: `
<div class="col-xs-12 col-lg-6" style="margin-top: 30px;">
    <div id="1" style="display: table; height: 100%; border-bottom: 3px solid #222160;">
        <div style="display: table-row;">
            <div style="display: table-cell; background-color: #f0f1ef;"><img id="19447393" role="presentation" src="{{imageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="{{imageEndpoint}}" /></div>
        </div>
        <div style="display: table-row;">
            <div style="display: table-cell; height: 100%; background-color: #f0f1ef; text-decoration: none; padding: 0px 20px 0px 20px; text-align: left;">
                <h3><a class="inline_disabled" style="text-decoration: none;" href="{{moduleLink}}" data-api-endpoint="{{moduleEndpoint}}" data-api-returntype="Page"><span style="font-size: 16pt; color: #222160; font-family: museo500; border-bottom: 3px solid #222160;"><span>{{moduleNumber}}. {{moduleName}}</span></span></a></h3>
                <p><span class="ui-provider fz b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">{{topicAndContentAreas}}</span></p>
            </div>
        </div>
    </div>
</div>`
        },
        SSET: {
            header: `
<div id="emble-customise-b10fdf7c" class="customise emble emble-banner emble-prevent-insert emble-prevent-delete-recursive emble-banner-theme-rmit-light" style="padding: 0px; margin: 0px;" title="embedded content" data-context-menu="customise delete" data-customise="new-banner-theme" data-emble-name="Banner" data-emble-version="2.0">
    <div>
        <div style="display: grid; grid-template-columns: repeat(20,1fr); grid-auto-rows: 1fr; height: auto;">
            <div style="grid-column: 1/21; grid-row: 1/12; z-index: 1; height: 100%; overflow: hidden; position: relative;">
                <div style="width: 1040px; height: 100%;"><img style="display: block; min-height: 100%; width: 1040px; top: 0; left: 0;" role="presentation;" src="{{bannerImageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="{{bannerImageEndpoint}}" /></div>
            </div>
            <h2 style="grid-column: 2/20; grid-row: 4/10; z-index: 3; max-width: 100%;"><span style="vertical-align: middle; display: inline-block; text-align: left; color: #222160; text-decoration: none; font-family: museo700; font-size: 32pt;"><span class="stem-header-box-decoration-break" style="background-color: #e3e5e0; padding: 3px 15px; font-size: 32pt;">{{courseName}}</span></span><br /><span style="color: #ffffff; font-family: museo300;"><span style="font-size: 16px; background-color: #e61e2a; padding: 3px 15px;"><strong>{{courseCode}} | {{schoolName}}</strong></span></span></h2>
            <div class="emble-banner-accent" style="z-index: 2; grid-row: 10/12;">
                <div class="ribbon" style="grid-row: 10/12;"><img class="pixel-regular" src="{{ribbonImageSrc}}" data-api-endpoint="{{ribbonImageEndpoint}}" data-api-returntype="File" /></div>
            </div>
        </div>
    </div>
</div>
<p class="narrow-p"> </p>
<table class="stem-bg-shadow" style="border-collapse: collapse; width: 100%; margin-left: auto; margin-right: auto; border: 1px solid #f1f2f3; border-top: 5px solid #222160;" role="presentation" cellpadding="10px">
    <tbody>
        <tr>
            <td style="width: 100%; padding: 20px;">
                <p><span dir="ltr">{{coursePromise}}</span></p>
                <p><span><span class="TextRun SCXW24004924 BCX0" lang="EN-AU" data-contrast="auto"><span class="NormalTextRun SCXW24004924 BCX0">This Canvas course site will provide activities and materials to help you learn. You will also submit your <a class="inline_disabled" href="{{courseLink}}/assignments">assessments</a> here. If you're not sure how to do something, check out our <a class="inline_disabled" href="{{courseLink}}/pages/getting-help#canvas">help with Canvas</a>. </span></span></span></p>
                <p id="emble-customise-5e591084" class="btn emble-btn customise emble-prevent-delete-recursive btn-blue" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a> <i class="icon-none"></i></a> <a class="inline_disabled" title="Link" href="{{courseLink}}/modules/items/6140111">Getting Started</a></p>
                <span> </span>
                <p id="emble-customise-228a2824" class="btn emble-btn btn-blue customise emble-prevent-delete-recursive" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a><i class="icon-none"> </i></a><a class="inline_disabled" title="Link" href="http://www1.rmit.edu.au/browse;ID=msrkgrf8e6ef1" target="_blank" rel="noopener">Course Guide </a></p>
                <span> </span>
                <p id="emble-customise-228a2824" class="btn emble-btn btn-blue customise emble-prevent-delete-recursive" data-context-menu="customise rce-link rce-course-links delete" data-customise="icon button-theme" data-emble-name="Button" data-emble-version="2.0"><a><i class="icon-none"> </i></a><a class="inline_disabled" title="Link" href="{{courseLink}}/modules/items/6140118">Digital Class Links</a></p>
            </td>
        </tr>
    </tbody>
</table>`,
            moduleTemplate12: `
<div class="col-xs-12 col-lg-4" style="margin-top: 30px;">
    <div id="1" style="display: table; height: 100%; border-bottom: 3px solid #222160;">
        <div style="display: table-row;">
            <div style="display: table-cell; background-color: #f0f1ef;"><img id="19447393" role="presentation" src="{{imageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="{{imageEndpoint}}" /></div>
        </div>
        <div style="display: table-row;">
            <div style="display: table-cell; height: 100%; background-color: #f0f1ef; text-decoration: none; padding: 0px 20px 0px 20px; text-align: left;">
                <h3><a class="inline_disabled" style="text-decoration: none;" href="{{moduleLink}}" data-api-endpoint="{{moduleEndpoint}}" data-api-returntype="Page"><span style="font-size: 16pt; color: #222160; font-family: museo500; border-bottom: 3px solid #222160;"><span>{{moduleNumber}}. {{moduleName}}</span></span></a></h3>
                <p><span class="ui-provider fz b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">{{topicAndContentAreas}}</span></p>
            </div>
        </div>
    </div>
</div>`,
            moduleTemplate8: `
<div class="col-xs-12 col-lg-6" style="margin-top: 30px;">
    <div id="1" style="display: table; height: 100%; border-bottom: 3px solid #222160;">
        <div style="display: table-row;">
            <div style="display: table-cell; background-color: #f0f1ef;"><img id="19447393" role="presentation" src="{{imageSrc}}" alt="" data-ally-user-updated-alt="" data-decorative="true" data-api-returntype="File" data-api-endpoint="{{imageEndpoint}}" /></div>
        </div>
        <div style="display: table-row;">
            <div style="display: table-cell; height: 100%; background-color: #f0f1ef; text-decoration: none; padding: 0px 20px 0px 20px; text-align: left;">
                <h3><a class="inline_disabled" style="text-decoration: none;" href="{{moduleLink}}" data-api-endpoint="{{moduleEndpoint}}" data-api-returntype="Page"><span style="font-size: 16pt; color: #222160; font-family: museo500; border-bottom: 3px solid #222160;"><span>{{moduleNumber}}. {{moduleName}}</span></span></a></h3>
                <p><span class="ui-provider fz b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">{{topicAndContentAreas}}</span></p>
            </div>
        </div>
    </div>
</div>`
        }
    };

    const schoolNames = {
        'TBS': 'The Business School',
        'SSET': 'School of Science, Engineering & Technology'
    };

    function generateModuleFields() {
        const layoutChoice = parseInt(document.getElementById("layout-choice").value);
        const moduleCount = layoutChoice === 12 ? 12 : 8;
        const container = document.getElementById("module-container");
        container.innerHTML = "";

        let gridRow = '<div class="grid-row">';
        for (let i = 1; i <= moduleCount; i++) {
            const moduleHTML = `
                <div class="col-xs-12 col-md-${layoutChoice === 12 ? '4' : '6'}">
                    <div class="module-box">
                        <h3>Module ${i}</h3>
                        <label>Module Name:</label>
                        <input type="text" name="module-name-${i}" required placeholder="e.g. Introduction">
                        <label>Topic and Content Areas (max 30 words):</label>
                        <textarea name="topic-and-content-areas-${i}" rows="2" required placeholder="e.g. Digital Systems: Circuit design, simulation tools" oninput="limitWords(this, 30)"></textarea>
                    </div>
                </div>
            `;
            gridRow += moduleHTML;

            if ((layoutChoice === 12 && i % 3 === 0) || (layoutChoice === 8 && i % 2 === 0)) {
                if (i !== moduleCount) {
                    gridRow += '</div><div class="grid-row">';
                }
            }
        }
        gridRow += '</div>';
        container.innerHTML = gridRow;
    }

    function limitWords(textarea, maxWords) {
        const words = textarea.value.trim().split(/\s+/);
        if (words.length > maxWords) {
            textarea.value = words.slice(0, maxWords).join(' ');
            alert(`Maximum of ${maxWords} words allowed. Extra words have been removed.`);
        }
    }

    function extractCourseBasePath(url) {
        if (!url) return '';
        const match = url.match(/\/courses\/\d+/);
        return match ? match[0] : '';
    }

    function parseUserHTML(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const bannerImg = doc.querySelector('.emble-banner img[role="presentation"]');
        const ribbonImg = doc.querySelector('.emble-banner-accent img.pixel-regular');
        
        const bannerH2 = doc.querySelector('h2');
        let school = document.getElementById("school").value;
        let courseName = '';
        let courseCode = '';
        let courseLink = '';
        
        if (bannerH2) {
            const spans = bannerH2.querySelectorAll('span');
            courseName = spans[0]?.textContent.trim() || '';
            const codeAndSchool = spans[1]?.textContent.trim().split(' | ') || [];
            courseCode = codeAndSchool[0] || '';
            const detectedSchoolName = codeAndSchool[1] || '';
            if (detectedSchoolName === schoolNames['TBS']) school = 'TBS';
            if (detectedSchoolName === schoolNames['SSET']) school = 'SSET';
        }

        const firstLink = doc.querySelector('a[href*="/courses/"]');
        if (firstLink) {
            courseLink = extractCourseBasePath(firstLink.getAttribute('href'));
        }

        const moduleContainers = doc.querySelectorAll('.col-xs-12.col-lg-4, .col-xs-12.col-lg-6');
        const extractedModules = [];
        
        moduleContainers.forEach(container => {
            const img = container.querySelector('img[role="presentation"]');
            const imageSrc = img?.getAttribute('src') || '';
            const imageEndpoint = img?.getAttribute('data-api-endpoint') || '';
            
            const link = container.querySelector('a[style*="text-decoration: none;"]');
            const moduleLink = link?.getAttribute('href') || '';
            const moduleEndpoint = link?.getAttribute('data-api-endpoint') || '';
            
            extractedModules.push({
                imageSrc,
                imageEndpoint,
                moduleLink,
                moduleEndpoint
            });
        });

        return {
            school,
            courseName,
            courseCode,
            courseLink,
            bannerImageSrc: bannerImg?.getAttribute('src') || '',
            bannerImageEndpoint: bannerImg?.getAttribute('data-api-endpoint') || '',
            ribbonImageSrc: ribbonImg?.getAttribute('src') || '',
            ribbonImageEndpoint: ribbonImg?.getAttribute('data-api-endpoint') || '',
            modules: extractedModules
        };
    }

    function getSequenceCode(weekNumber, ilwPosition, totalWeeks) {
        if (weekNumber === ilwPosition) {
            return "ILW";
        }
        
        let letterIndex;
        if (weekNumber < ilwPosition) {
            letterIndex = weekNumber - 1;
        } else {
            letterIndex = weekNumber - 2;
        }
        
        const maxLetters = totalWeeks === 12 ? 11 : 7;
        
        if (letterIndex < maxLetters) {
            return "T" + String.fromCharCode(65 + letterIndex);
        }
        
        return "";
    }

    document.getElementById("syllabus-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const userHTML = document.getElementById("user-html").value;
        const coursePromise = document.getElementById("course-promise").value;
        const layoutChoice = parseInt(document.getElementById("layout-choice").value);
        const moduleCount = layoutChoice === 12 ? 12 : 8;
        const ilwPosition = parseInt(document.getElementById("ilw-position").value);

        const parsedData = parseUserHTML(userHTML);
        const school = parsedData.school;
        const template = templates[school];

        let generatedCode = template.header
            .replace(/{{courseName}}/g, parsedData.courseName || 'Unknown Course')
            .replace(/{{courseCode}}/g, parsedData.courseCode || 'Unknown Code')
            .replace(/{{schoolName}}/g, schoolNames[school])
            .replace(/{{coursePromise}}/g, coursePromise)
            .replace(/{{courseLink}}/g, parsedData.courseLink || '')
            .replace(/{{bannerImageSrc}}/g, parsedData.bannerImageSrc || '')
            .replace(/{{bannerImageEndpoint}}/g, parsedData.bannerImageEndpoint || '')
            .replace(/{{ribbonImageSrc}}/g, parsedData.ribbonImageSrc || '')
            .replace(/{{ribbonImageEndpoint}}/g, parsedData.ribbonImageEndpoint || '');

        let modulesHTML = '<div class="content-box" style="margin: 0 0;"><div class="grid-row">';

        for (let i = 1; i <= moduleCount; i++) {
            const moduleName = document.querySelector(`input[name="module-name-${i}"]`).value;
            const topicAndContentAreas = document.querySelector(`textarea[name="topic-and-content-areas-${i}"]`).value;
            const moduleData = parsedData.modules[i - 1] || {};
            const sequenceCode = getSequenceCode(i, ilwPosition, moduleCount);
            const moduleTemplate = layoutChoice === 12 ? template.moduleTemplate12 : template.moduleTemplate8;
            
            const moduleHTML = moduleTemplate
                .replace(/{{moduleNumber}}/g, i)
                .replace(/{{moduleName}}/g, moduleName)
                .replace(/{{topicAndContentAreas}}/g, topicAndContentAreas)
                .replace(/{{moduleLink}}/g, moduleData.moduleLink || '#')
                .replace(/{{moduleEndpoint}}/g, moduleData.moduleEndpoint || '')
                .replace(/{{imageSrc}}/g, moduleData.imageSrc || '')
                .replace(/{{imageEndpoint}}/g, moduleData.imageEndpoint || '')
                .replace('class="col-xs-12', `class="col-xs-12" data-ruvn-sequence="${sequenceCode}"`);

            modulesHTML += moduleHTML;

            if ((layoutChoice === 12 && i % 3 === 0) || (layoutChoice === 8 && i % 2 === 0)) {
                if (i !== moduleCount) {
                    modulesHTML += '</div></div><div class="content-box" style="margin: 0 0;"><div class="grid-row">';
                }
            }
        }

        modulesHTML += '</div></div><p> </p>';
        generatedCode += modulesHTML;

        const generatedCodeDiv = document.getElementById("generated-code");
        generatedCodeDiv.textContent = generatedCode;
        document.getElementById("copy-button").style.display = "inline-block";
    });
    
    // Add event listener for the layout dropdown
    document.getElementById('layout-choice').addEventListener('change', generateModuleFields);
    
    // Add event listener for the copy button
    document.getElementById('copy-button').addEventListener('click', () => {
        const codeToCopy = document.getElementById('generated-code').textContent;
        const copyButton = document.getElementById('copy-button');
        if (navigator.clipboard) {
            navigator.clipboard.writeText(codeToCopy).then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => { copyButton.textContent = 'Copy Code'; }, 2000);
            }).catch(err => {
                alert('Failed to copy code.');
                console.error('Copy failed', err);
            });
        } else {
             alert('Clipboard API not available. Please copy the code manually.');
        }
    });

    // Initial call to set up the module fields on page load
    generateModuleFields();
});
