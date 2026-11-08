// All cases use generalized names and omit sensitive identifiers and private configuration.
const CASES={
  'executive-assistant':{
    eyebrow:'01 / AI SYSTEMS + CLOUD',
    title:'AI Executive Assistant & Business Automation Platform',
    summary:'An internal Telegram assistant that connects executive schedules, news, travel, documents, inquiries, and task workflows.',
    type:'Internal software and AI automation',roleShort:'Feature development, integrations, and maintenance',status:'Deployed platform with scoped pilots',
    tags:['Python','OpenAI API','Telegram Bot API','Google Workspace','iCloud CalDAV','ClickUp','ClamAV','OAuth 2.0','SQLite','Docker Compose','DigitalOcean'],
    challenge:'Give executive and operations users one place to get daily briefings, handle documents, and request actions across calendar, email, and task systems. Keep requests and outputs within the appropriate account, role, and conversation.',
    role:'I collaborate directly with the CEO to gather requirements and develop new features for the Telegram-based AI executive assistant. I maintain existing workflows, troubleshoot provider integrations, and manage application releases.',
    approach:'The Python service uses OpenAI function calling to route Telegram requests. It integrates Google Workspace and iCloud through scoped authorization and uses SQLite for workflow state, audit records, and duplicate prevention. I deploy the service with Docker Compose on DigitalOcean Ubuntu.',
    pipeline:['Telegram request or scheduled job','Python + OpenAI','Authorized service or team update'],
    bullets:[
      'Develop and maintain Python features, set up OAuth connections, and resolve API authorization and Telegram polling issues.',
      'Test changes before release, verify scheduled jobs after deployment, and maintain backups and rollback procedures.',
      'Monitor the cloud-hosted application and troubleshoot failures across message delivery, file processing, and external providers.'
    ],
    featureGroups:[
      {
        title:'Telegram access and approvals',
        items:[
          'Handle natural-language requests in private chats and approved group topics. Apply role-based access, OAuth 2.0, audit logs, and confirmation steps for sensitive actions.'
        ]
      },
      {
        title:'Daily schedules, news, and travel',
        items:[
          'Deliver daily and on-demand iCloud schedule briefings with Makati weather, quotes, meeting details, and links. Send 30-minute calendar reminders.',
          'Maintain morning, afternoon, evening, and on-demand Philippine and international news editions with RSS filtering, publisher links, duplicate detection, retries, and missed-delivery alerts.',
          'Support opt-in travel estimates from a shared location to a meeting destination, departure alerts, and Google Maps and Waze links.'
        ]
      },
      {
        title:'Documents, media, and Google Drive',
        items:[
          'Review Word, Excel, plain text, and text-based PDF attachments with ClamAV scanning and PDF page citations. Resolve file references from an authorized caption or reply in the current topic.',
          'Process image, audio, and video inputs. Find and preview authorized Drive files and support confirmed Google Docs and Sheets edits, Word and Excel edited copies, and file renames or moves.'
        ]
      },
      {
        title:'Gmail inquiries and task coordination',
        items:[
          'Use read-only Gmail intake to organize inquiries for human review, prepare draft acknowledgments, and produce daily activity summaries in Telegram.',
          'Support Google Tasks, approved ClickUp task creation, internal assignments, status and proof tracking, and follow-up requests from group discussions.'
        ]
      },
      {
        title:'Calendar and meeting coordination',
        items:[
          'Integrate Google Calendar, Google Meet, and iCloud for calendar conflict checks, invitations, Meet links, iCloud event copies, and approved email messages.',
          'Developed an internal Telegram pilot that collects meeting requests, previews the proposed details, and requires approval before sending invitations.'
        ]
      },
      {
        title:'Marketing workflow modules',
        items:[
          'Worked with proposal intake, planning and approvals, assignment tracking, publishing checks, and performance snapshots.',
          'Integrated Google Sheets validation for scheduled Telegram digests and designed a separate Make.com preparation scenario.'
        ]
      }
    ],
    outcome:'The internal assistant is deployed. Group meeting requests are in an internal pilot, and travel features depend on consent and provider configuration. Marketing preparation and scheduled delivery have separate verification steps.',
    note:'The workflow diagram uses public-facing names and synthetic examples.'
  },
  'crm-task-routing':{
    eyebrow:'02 / BUSINESS PROCESS AUTOMATION',
    title:'Website Lead Capture & CRM Task Routing',
    summary:'An active Make.com workflow that connects WordPress inquiries and HubSpot CRM activity to routed task creation in ClickUp.',
    type:'Internal business automation',roleShort:'Sole workflow designer & builder',status:'Active scenario',
    tags:['Make.com','WordPress','HubSpot CRM','ClickUp','Routers','Filters','Data Mapping','WhatsApp Business Cloud'],
    challenge:'CRM records and sales follow-ups need consistent routing to the correct operational tasks without having a person recreate information across separate systems.',
    role:'I independently designed, built, configured, tested, and maintained the Make.com automation scenario, including CRM triggers, conditional routes, and task field mapping.',
    approach:'Capture WordPress inquiries and standardize their HubSpot CRM records. In Make.com, use a CRM trigger, conditional routes, and field mappings to create the appropriate ClickUp tasks.',
    pipeline:['WordPress + HubSpot CRM','Make.com router and filters','ClickUp tasks'],
    bullets:['Configured the CRM trigger, lead sources, and routing rules.','Standardized source CRM fields and mapped them to the appropriate sales tasks.','Tested the lead-to-task flow and used execution history to troubleshoot failed runs.','Configured a separate WhatsApp Business Cloud integration scenario.'],
    outcome:'The active workflow routes qualifying CRM records into ClickUp tasks. The WhatsApp Business Cloud scenario was configured separately.',
    note:'The diagram represents the flow with generalized routes and fields.'
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
  },
  'marketing-digest':{
    eyebrow:'06 / MARKETING REPORTING',
    title:'Marketing Proposal Validation & Weekly Digest',
    summary:'A Google Sheets intake and validation workflow for a weekly Telegram digest, with a separate Make.com preparation scenario.',
    type:'Internal reporting integration',roleShort:'Workflow design and integration',status:'Sheets integration enabled; scenario activation pending verification',
    tags:['Make.com','Google Sheets','Python','Telegram','Data Validation','Scheduled Automation'],
    challenge:'Collect proposals in a structured format and flag missing inputs before the weekly reporting window. Coordinate preparation and delivery so each digest has a single sender.',
    role:'I designed the Make.com preparation scenario and worked on connecting the Google Sheets reader to the assistant’s scheduled reporting workflow.',
    approach:'Read proposal rows from Google Sheets and check required fields, reporting-week eligibility, and source information. The Make.com design prepares inputs and records run status. The Python assistant handles Telegram delivery.',
    pipeline:['Google Sheets proposals','Make.com preparation and validation','Assistant-managed Telegram digest'],
    bullets:[
      'Designed the Sheets schema and field mappings for incoming proposals.',
      'Added validation for complete, eligible submissions and a correction path for incomplete inputs.',
      'Designed Make.com preparation with run logging and duplicate prevention.',
      'Scoped the Telegram digest to an authorized team destination and kept one sender for delivery.'
    ],
    outcome:'The Google Sheets reader was enabled and its connection and schema checks passed. Make.com activation and the first eligible scheduled Telegram delivery remain pending verification.',
    note:'The case study describes the scenario design and the components verified during setup.'
  },
  'brand-monitoring':{
    eyebrow:'07 / BRAND MONITORING PILOT',
    title:'Brand Impersonation Monitoring Pilot',
    summary:'A Make.com blueprint for finding public search matches, queueing observations in Google Sheets, and preparing reviewed alerts.',
    type:'Internal monitoring prototype',roleShort:'Scenario and review workflow design',status:'Blueprint tested with simulated inputs',
    tags:['Make.com','Google Sheets','Public Search','Human Review','Telegram','Deduplication'],
    challenge:'Give a review team a consistent way to investigate possible impersonation from public search results and track which findings need escalation.',
    role:'I designed a consolidated Make.com scenario and a review workbook for discovery, triage, and alert routing.',
    approach:'Run bounded public-index queries against an approved registry. Store candidate matches with stable identifiers and route them through human review before any risk-based alert.',
    pipeline:['Public search matches','Sheets queue and human review','Reviewed Telegram alerts'],
    bullets:[
      'Built search, review, and notification branches into a single scenario blueprint.',
      'Used stable case and revision identifiers to help prevent duplicate alerts on reruns.',
      'Designed separate review states for unverified findings and reviewer-confirmed cases.',
      'Tested the scenario logic with simulated search, Sheets, and Telegram responses.'
    ],
    outcome:'The blueprint passed local scenario checks with simulated inputs. Provider connections, live search, and scheduled alert delivery are pending validation.',
    note:'Human reviewers verify findings and decide on any external escalation.'
  }
};
function putText(id,val){const el=document.getElementById(id);if(el)el.textContent=val}
function fillTags(id,tags){const el=document.getElementById(id);if(!el)return;tags.forEach(tag=>{const span=document.createElement('span');span.textContent=tag;el.appendChild(span)})}
function appendListItems(list, items){
  for(const item of items){
    const li=document.createElement('li');
    li.textContent=item;
    list.appendChild(li);
  }
}
function renderFeatureGroups(groups){
  if(!groups?.length)return;
  const section=document.getElementById('case-features');
  const contents=document.getElementById('case-feature-groups');
  for(const group of groups){
    const article=document.createElement('div');
    const title=document.createElement('h3');
    title.textContent=group.title;
    const list=document.createElement('ul');
    appendListItems(list,group.items);
    article.append(title,list);
    contents.appendChild(article);
  }
  section.hidden=false;
}
const params=new URLSearchParams(location.search);const key=params.get('id');const data=Object.hasOwn(CASES,key)?CASES[key]:null;
if(data){
  document.title=`${data.title} | Jeremiah Benigno`;
  putText('case-eyebrow',data.eyebrow);putText('case-title',data.title);putText('case-summary',data.summary);
  putText('case-challenge',data.challenge);putText('case-role',data.role);putText('case-approach',data.approach);putText('case-outcome',data.outcome);putText('case-note',data.note);
  putText('rail-type',data.type);putText('rail-role',data.roleShort);putText('rail-status',data.status);
  fillTags('case-tags',data.tags.slice(0,7));fillTags('rail-tags',data.tags);
  appendListItems(document.getElementById('case-bullets'),data.bullets);
  renderFeatureGroups(data.featureGroups);
  const flow=document.getElementById('case-pipeline');data.pipeline.forEach((item,i)=>{const span=document.createElement('span');span.textContent=item;flow.appendChild(span);if(i<data.pipeline.length-1){const arrow=document.createElement('b');arrow.textContent='→';arrow.setAttribute('aria-hidden','true');flow.appendChild(arrow)}});
}else{
  document.title='Project not found | Jeremiah Benigno';putText('case-title','Project not found');putText('case-summary','The project link may be outdated. You can explore all featured projects from the main portfolio.');
  document.querySelector('.case-layout')?.remove();document.querySelector('.detail-tags')?.remove();
}
