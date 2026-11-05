// All cases use generalized names and omit sensitive identifiers and private configuration.
const CASES={
  'executive-assistant':{
    eyebrow:'01 / AI SYSTEMS + CLOUD',
    title:'AI-Powered Executive Assistant & Business Automation Platform',
    summary:'A cloud-hosted, messaging-based AI assistant supporting executive productivity, news updates, task coordination, and daily automation.',
    type:'Internal AI automation project',roleShort:'AI integration & cloud deployment',status:'Deployed system; feature readiness varies',
    tags:['Python','OpenAI API','Telegram Bot API','Google Calendar','Google Tasks','OAuth 2.0','SQLite','Docker','DigitalOcean','Ubuntu Linux'],
    challenge:'Bring conversational assistance, productivity services, and scheduled information delivery together in an accessible interface, while maintaining authentication, persistent data, and dependable server operations.',
    role:'I handled system configuration, third-party integrations, authentication setup, debugging, Docker deployment, and cloud server operations. These are my verified contributions; I do not claim sole authorship of every application module.',
    approach:'Configured a Python application accessible through Telegram; connected the OpenAI Chat Completions tool-calling layer with productivity services. Deployed the containerized application to an Ubuntu server on DigitalOcean with SQLite persistence and API credentials managed through environment configuration.',
    pipeline:['Telegram','Python + OpenAI','Google / News / Data'],
    bullets:['Configured OpenAI API integration and assistant model references during migration from earlier provider configurations.','Set up Google OAuth 2.0 access and integration with Calendar and Tasks services.','Used Google News RSS and HTTPX-backed news intake for summarization and reporting workflows.','Supported scheduled reminders, daily digests, quote delivery, and related assistant modules.','Deployed and managed Docker Compose services on a DigitalOcean Ubuntu server using SSH and SCP.','Investigated API authorization errors, application configuration problems, and Telegram bot polling conflicts.','Worked with the system\'s SQLite data persistence and marketing automation integration components.'],
    outcome:'Deployed a cloud-hosted assistant application and resolved integration and runtime issues during setup and operations. Marketing functionality and individual automation modules may have separate configuration or activation requirements.',
    note:'Confidentiality note: the original internal project name, private source code, user information, credentials, and environment-specific details are intentionally excluded.'
  },
  'crm-task-routing':{
    eyebrow:'02 / BUSINESS PROCESS AUTOMATION',
    title:'CRM-to-Task Workflow Automation',
    summary:'An active Make.com workflow that connects CRM activity to routed task creation in ClickUp, reducing the need for manual handoffs.',
    type:'Internal business automation',roleShort:'Sole workflow designer & builder',status:'Active scenario',
    tags:['Make.com','HubSpot CRM','ClickUp','Routers','Filters','Data Mapping'],
    challenge:'CRM records and sales follow-ups need consistent routing to the correct operational tasks without having a person recreate information across separate systems.',
    role:'I independently designed, built, configured, tested, and maintained the Make.com automation scenario, including CRM triggers, conditional routes, and task field mapping.',
    approach:'Used a scheduled HubSpot CRM object watch module, a Make.com router to apply business-specific conditions, and ClickUp Create a Task modules for the appropriate destination.',
    pipeline:['HubSpot CRM','Router + filters','ClickUp tasks'],
    bullets:['Configured the CRM trigger and polling interval.','Designed routing conditions for distinct business workflows.','Mapped source CRM data into destination task fields.','Tested end-to-end record flows and updated the scenario based on issues found.','Maintained the active scenario and checked its execution history.'],
    outcome:'An active automation scenario that routes qualifying CRM records into ClickUp tasks. Workflow execution counts are visible in the platform, but no unverified time-savings or conversion metrics are claimed here.',
    note:'The diagram is a simplified reconstruction of the workflow; internal branch names and client-specific filters are not displayed.'
  },
  'email-intelligence':{
    eyebrow:'03 / AI-ASSISTED OPERATIONS',
    title:'AI Email Classification & Logging',
    summary:'AI-assisted email analysis with structured extraction, multi-branch categorization, Google Sheets logging, and Gmail label updates.',
    type:'Internal business automation',roleShort:'Sole workflow designer & builder',status:'Active scenarios',
    tags:['Make.com','Gmail','OpenAI','JSON','Routers','Google Sheets'],
    challenge:'High-volume shared inbox activity required repeatable email triage, accurate category assignment, and searchable logs rather than ad hoc manual labeling.',
    role:'I independently designed and implemented the original email classification workflow and expanded the approach for an additional, more granular categorization scenario.',
    approach:'Scheduled Gmail polling feeds email information to an OpenAI completion step. The response is parsed as structured JSON and evaluated by conditional routes; matching branches write records to Google Sheets and update Gmail labels.',
    pipeline:['Gmail + OpenAI','Parse + route','Sheets + labels'],
    bullets:['Created a scheduled email watcher in Make.com.','Configured AI-assisted classification and structured field extraction.','Parsed JSON output and routed messages through category-specific branches.','Mapped records to Google Sheets and applied corresponding Gmail labels.','Added direct email references and duplicate-prevention checks as part of the broader logging workflow.','Developed an expanded scenario covering additional email categories and follow-up handling.'],
    outcome:'Active automation scenarios now handle rule-based and AI-assisted steps within inbox classification workflows. No claims are made about classification accuracy without a measured test dataset.',
    note:'Category labels, message content, customer identifiers, and email addresses are deliberately withheld from this public case study.'
  },
  'executive-reporting':{
    eyebrow:'04 / EXECUTIVE REPORTING',
    title:'Automated Executive Email Reporting',
    summary:'Scheduled digests assembling information from structured Google Sheets sources and delivering a consolidated email summary.',
    type:'Internal business automation',roleShort:'Workflow design & implementation',status:'Active scenario',
    tags:['Make.com','Google Sheets','Gmail','Aggregators','Scheduled Automation'],
    challenge:'Executive stakeholders benefit from a single organized update instead of having to review several separate tracking sheets and message threads.',
    role:'I built and configured the scheduled workflow, including the source lookups, numeric aggregation steps, message assembly, and email delivery.',
    approach:'Configured scheduled Google Sheets data retrieval, grouped values through Make.com tools and aggregators, and connected the assembled summary to Gmail delivery.',
    pipeline:['Sheets sources','Aggregate values','Gmail digest'],
    bullets:['Configured scheduled reading of reporting source ranges.','Used numeric aggregation tools to prepare summary values.','Organized multiple source categories into one reporting flow.','Configured email delivery and tested the resulting summary format.','Monitored the active workflow and adjusted mapping as needed.'],
    outcome:'A scheduled reporting automation that prepares and delivers email summaries from defined spreadsheet sources.',
    note:'Sample source names and message recipients are omitted because the workflow supports internal executive operations.'
  },
  'marketing-intelligence':{
    eyebrow:'05 / MARKETING AUTOMATION PROTOTYPE',
    title:'Social Marketing Intelligence Workflow',
    summary:'An inactive Make.com scenario blueprint for structured social insights ingestion, storage, and error handling across different Meta data sources.',
    type:'Internal automation prototype',roleShort:'Scenario design & configuration',status:'Inactive at last review',
    tags:['Make.com','Facebook Pages','Instagram Insights','Meta Ads','Routers','Data Stores'],
    challenge:'Design a consistent way to separate different social platform data streams and prepare paths for analytics storage and handling of failed requests.',
    role:'I configured the scenario structure, branches, and data-storage/error-log steps. I do not present the platform connections as live or the data retrieval as operational.',
    approach:'A configuration stage feeds a multi-branch router. Separate routes are planned for Instagram account insights, Facebook Page posts, and advertising insights; each route includes storage and/or error-log actions.',
    pipeline:['Configuration','Meta data routes','Storage + errors'],
    bullets:['Built modular routes for several Meta platform data sources.','Configured proposed storage destinations for analytics records.','Added distinct error-log paths to help make failures observable.','Kept the scenario inactive while account authorization and production validation remain outstanding.'],
    outcome:'An implementation-ready structural prototype. The supplied screenshot shows the scenario as inactive, so this portfolio does not claim live Meta API access or completed automated reporting.',
    note:'This is a design and configuration case study, not a live integration demonstration. Provider authorization and production validation are separate tasks.'
  }
};
function putText(id,val){const el=document.getElementById(id);if(el)el.textContent=val}
function fillTags(id,tags){const el=document.getElementById(id);if(!el)return;tags.forEach(tag=>{const span=document.createElement('span');span.textContent=tag;el.appendChild(span)})}
const params=new URLSearchParams(location.search);const key=params.get('id');const data=CASES[key];
if(data){
  document.title=`${data.title} | Jeremiah Benigno`;
  putText('case-eyebrow',data.eyebrow);putText('case-title',data.title);putText('case-summary',data.summary);
  putText('case-challenge',data.challenge);putText('case-role',data.role);putText('case-approach',data.approach);putText('case-outcome',data.outcome);putText('case-note',data.note);
  putText('rail-type',data.type);putText('rail-role',data.roleShort);putText('rail-status',data.status);
  fillTags('case-tags',data.tags.slice(0,7));fillTags('rail-tags',data.tags);
  const bullets=document.getElementById('case-bullets');data.bullets.forEach(item=>{const li=document.createElement('li');li.textContent=item;bullets.appendChild(li)});
  const flow=document.getElementById('case-pipeline');data.pipeline.forEach((item,i)=>{const span=document.createElement('span');span.textContent=item;flow.appendChild(span);if(i<data.pipeline.length-1){const arrow=document.createElement('b');arrow.textContent='→';arrow.setAttribute('aria-hidden','true');flow.appendChild(arrow)}});
}else{
  document.title='Project not found | Jeremiah Benigno';putText('case-title','Project not found');putText('case-summary','The project link may be outdated. You can explore all featured projects from the main portfolio.');
  document.querySelector('.case-layout')?.remove();document.querySelector('.detail-tags')?.remove();
}
