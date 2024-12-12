/** Copyright 2024 Suleman Mulla **/

document.body.addEventListener("mousemove", () => {
  if (!window.location.href.includes("querystudio.herokuapp.com")) return;

  let dataViews = [
    {
      name: "Automation Instance",
      alias: "_AutomationInstance",
      attributes: [{ "name": "MemberID", "type": "BIGINT/Number" }, { "name": "AutomationName", "type": "NVARCHAR(400)/Text" }, { "name": "AutomationDescription", "type": "NVARCHAR(400)/Text" }, { "name": "AutomationCustomerKey", "type": "NVARCHAR(400)/Text" }, { "name": "AutomationType", "type": "VARCHAR(9)/Text" }, { "name": "AutomationNotificationRecipient_Complete", "type": "NVARCHAR(500)/Text" }, { "name": "AutomationNotificationRecipient_Error", "type": "NVARCHAR(500)/Text" }, { "name": "AutomationNotificationRecipient_Skip", "type": "NVARCHAR(500)/Text" }, { "name": "AutomationStepCount", "type": "INT/Number" }, { "name": "AutomationInstanceID", "type": "UNIQUEIDENTIFIER/Text" }, { "name": "AutomationInstanceIsRunOnce", "type": "BIT/Boolean" }, { "name": "FilenameFromTrigger", "type": "NVARCHAR(4000)/Text" }, { "name": "AutomationInstanceScheduledTime_UTC", "type": "DATETIMEOFFSET/Date" }, { "name": "AutomationInstanceStartTime_UTC", "type": "DATETIMEOFFSET/Date" }, { "name": "AutomationInstanceEndTime_UTC", "type": "DATETIMEOFFSET/Date" }, { "name": "AutomationInstanceStatus", "type": "NVARCHAR(400)/Text" }, { "name": "AutomationInstanceActivityErrorDetails", "type": "NVARCHAR(4000)/Text" }]
    },
    {
      name: "Automation Activity Instance",
      alias: "_AutomationActivityInstance",
      attributes: [{ "name": "MemberID", "type": "BIGINT/Number" }, { "name": "AutomationName", "type": "NVARCHAR(400)/Text" }, { "name": "AutomationCustomerKey", "type": "NVARCHAR(400)/Text" }, { "name": "AutomationInstanceID", "type": "UNIQUEIDENTIFIER/Text" }, { "name": "ActivityType", "type": "INT/Number" }, { "name": "ActivityName", "type": "NVARCHAR(400)/Text" }, { "name": "ActivityDescription", "type": "NVARCHAR(400)/Text" }, { "name": "ActivityCustomerKey", "type": "NVARCHAR(400)/Text" }, { "name": "ActivityInstanceStep", "type": "VARCHAR(25)/Text" }, { "name": "ActivityInstanceID", "type": "UNIQUEIDENTIFIER/Text" }, { "name": "ActivityInstanceStartTime_UTC", "type": "DATETIMEOFFSET/Date" }, { "name": "ActivityInstanceEndTime_UTC", "type": "DATETIMEOFFSET/Date" }, { "name": "ActivityInstanceStatus", "type": "NVARCHAR(256)/Text" }, { "name": "ActivityInstanceStatusDetails", "type": "NVARCHAR(4000)/Text" }]
    },
    {
      name: "Bounce",
      alias: "_Bounce",
      attributes: [{ "name": "AccountID", "type": "INT/Number" }, { "name": "OYBAccountID", "type": "INT/Number" }, { "name": "JobID", "type": "BIGINT/Number" }, { "name": "ListID", "type": "INT/Number" }, { "name": "BatchID", "type": "BIGINT/Number" }, { "name": "SubscriberID", "type": "INT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "EventDate", "type": "DATETIME/Date" }, { "name": "IsUnique", "type": "BIT/Boolean" }, { "name": "Domain", "type": "VARCHAR(128)/Text" }, { "name": "BounceCategoryID", "type": "SMALLINT/Number" }, { "name": "BounceCategory", "type": "NVARCHAR(50)/Text" }, { "name": "BounceSubcategoryID", "type": "SMALLINT/Number" }, { "name": "BounceSubcategory", "type": "NVARCHAR(50)/Text" }, { "name": "BounceTypeID", "type": "SMALLINT/Number" }, { "name": "BounceType", "type": "NVARCHAR(50)/Text" }, { "name": "SMTPBounceReason", "type": "NVARCHAR(MAX)/Text" }, { "name": "SMTPMessage", "type": "NVARCHAR(MAX)/Text" }, { "name": "SMTPCode", "type": "SMALLINT/Number" }, { "name": "TriggererSendDefinitionObjectID", "type": "VARCHAR(36)/Text" }, { "name": "TriggeredSendCustomerKey", "type": "NVARCHAR(36)/Text" }, { "name": "IsFalseBounce", "type": "BIT/Boolean" }]
    },
    {
      name: "BusinessUnitUnsubscribes",
      alias: "_BusinessUnitUnsubscribes",
      attributes: [{ "name": "BusinessUnitID", "type": "BIGINT/Number" }, { "name": "SubscriberID", "type": "BIGINT/Number" }, { "name": "SubscriberKey", "type": "VARCHAR(254)/Text" }, { "name": "UnsubDateUTC", "type": "SMALLDATETIME/Date" }, { "name": "UnsubReason", "type": "VARCHAR(100)/Text" }]
    },
    {
      name: "Click",
      alias: "_Click",
      attributes: [{ "name": "AccountID", "type": "INT/Number" }, { "name": "OYBAccountID", "type": "INT/Number" }, { "name": "JobID", "type": "BIGINT/Number" }, { "name": "ListID", "type": "INT/Number" }, { "name": "BatchID", "type": "BIGINT/Number" }, { "name": "SubscriberID", "type": "INT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "EventDate", "type": "DATETIME/Date" }, { "name": "Domain", "type": "VARCHAR(128)/Text" }, { "name": "URL", "type": "VARCHAR(900)/Text" }, { "name": "LinkName", "type": "VARCHAR(1024)/Text" }, { "name": "LinkContent", "type": "VARCHAR(MAX)/Text" }, { "name": "IsUnique", "type": "BIT/Boolean" }, { "name": "TriggererSendDefinitionObjectID", "type": "UNIQUEIDENTIFIER/Text" }, { "name": "TriggeredSendCustomerKey", "type": "VARCHAR(36)/Text" }]
    },
    {
      name: "Complaint",
      alias: "_Complaint",
      attributes: [{ "name": "AccountID", "type": "INT/Number" }, { "name": "OYBAccountID", "type": "INT/Number" }, { "name": "JobID", "type": "BIGINT/Number" }, { "name": "ListID", "type": "INT/Number" }, { "name": "BatchID", "type": "BIGINT/Number" }, { "name": "SubscriberID", "type": "INT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "EventDate", "type": "DATETIME/Date" }, { "name": "IsUnique", "type": "BIT/Boolean" }, { "name": "Domain", "type": "VARCHAR(128)/Text" }]
    },
    {
      name: "Coupon",
      alias: "_Coupon",
      attributes: [{ "name": "Name", "type": "NVARCHAR(128)/Text" }, { "name": "ExternalKey", "type": "NVARCHAR(36)/Text" }, { "name": "Description", "type": "VARCHAR/Text" }, { "name": "BeginDate", "type": "DATETIME/Date" }, { "name": "ExpirationDate", "type": "DATETIME/Date" }]
    },
    {
      name: "EnterpriseAttribute",
      alias: "_EnterpriseAttribute",
      attributes: []
    },
    {
      name: "FTAF",
      alias: "_FTAF",
      attributes: [{ "name": "AccountID", "type": "INT/Number" }, { "name": "OYBAccountID", "type": "INT/Number" }, { "name": "JobID", "type": "INT/Number" }, { "name": "ListID", "type": "INT/Number" }, { "name": "BatchID", "type": "INT/Number" }, { "name": "SubscriberID", "type": "INT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "TransactionTime", "type": "DATETIME/Date" }, { "name": "Domain", "type": "VARCHAR(128)/Text" }, { "name": "IsUnique", "type": "BIT/Boolean" }, { "name": "TriggererSendDefinitionObjectID", "type": "UNIQUEIDENTIFIER/Text" }, { "name": "TriggeredSendCustomerKey", "type": "VARCHAR(36)/Text" }]
    },
    {
      name: "GroupConnect Contact Subscriptions",
      alias: "_MobileLineAddressContactSubscriptionView",
      attributes: [{ "name": "ChannelID", "type": "NVARCHAR/Text" }, { "name": "ContactID", "type": "BIGINT/Number" }, { "name": "ContactKey", "type": "NVARCHAR/Text" }, { "name": "AddressID", "type": "NVARCHAR/Text" }, { "name": "IsActive", "type": "BIT/Number" }, { "name": "CreatedDate", "type": "DATETIME/Date" }, { "name": "ModifiedDate", "type": "DATETIME/Date" }]
    },
    {
      name: "GroupConnect MobileLineOrphanContactView",
      alias: "_MobileLineOrphanContactView",
      attributes: [{ "name": "ContactID", "type": "BIGINT/Number" }, { "name": "ContactKey", "type": "NVARCHAR/Text" }, { "name": "AddressID", "type": "NVARCHAR/Text" }, { "name": "CreatedDate", "type": "DATETIME/Date" }]
    },
    {
      name: "Job",
      alias: "_Job",
      attributes: [{ "name": "JobID", "type": "INT/Number" }, { "name": "EmailID", "type": "INT/Number" }, { "name": "AccountID", "type": "INT/Number" }, { "name": "AccountUserID", "type": "INT/Number" }, { "name": "FromName", "type": "NVARCHAR(130)/Text" }, { "name": "FromEmail", "type": "VARCHAR(100)/Email" }, { "name": "SchedTime", "type": "SMALLDATETIME/Date" }, { "name": "PickupTime", "type": "SMALLDATETIME/Date" }, { "name": "DeliveredTime", "type": "SMALLDATETIME/Date" }, { "name": "EventID", "type": "VARCHAR(50)/Text" }, { "name": "IsMultipart", "type": "BIT/Boolean" }, { "name": "JobType", "type": "VARCHAR(50)/Text" }, { "name": "JobStatus", "type": "VARCHAR(50)/Text" }, { "name": "ModifiedBy", "type": "INT/Number" }, { "name": "ModifiedDate", "type": "DATETIME/Date" }, { "name": "EmailName", "type": "CHAR(100)/Text" }, { "name": "EmailSubject", "type": "NCHAR(200)/Text" }, { "name": "IsWrapped", "type": "BIT/Boolean" }, { "name": "TestEmailAddr", "type": "VARCHAR(128)/Email" }, { "name": "Category", "type": "VARCHAR(100)/Text" }, { "name": "BccEmail", "type": "VARCHAR(100)/Email" }, { "name": "OriginalSchedTime", "type": "SMALLDATETIME/Date" }, { "name": "CreatedDate", "type": "SMALLDATETIME/Date" }, { "name": "CharacterSet", "type": "VARCHAR(30)/Text" }, { "name": "IPAddress", "type": "VARCHAR(50)/Text" }, { "name": "SalesForceTotalSubscriberCount", "type": "INT/Number" }, { "name": "SalesForceErrorSubscriberCount", "type": "INT/Number" }, { "name": "SendType", "type": "VARCHAR(128)/Text" }, { "name": "DynamicEmailSubject", "type": "NTEXT/Text" }, { "name": "SuppressTracking", "type": "BIT/Boolean" }, { "name": "SendClassificationType", "type": "NVARCHAR(32)/Text" }, { "name": "SendClassification", "type": "NVARCHAR(36)/Text" }, { "name": "ResolveLinksWithCurrentData", "type": "BIT/Boolean" }, { "name": "EmailSendDefinition", "type": "NVARCHAR(36)/Text" }, { "name": "DeduplicateByEmail", "type": "BIT/Boolean" }, { "name": "TriggererSendDefinitionObjectID", "type": "UNIQUEIDENTIFIER/null" }, { "name": "TriggeredSendCustomerKey", "type": "VARCHAR(36)/Text" }]
    },
    {
      name: "Journey",
      alias: "_Journey",
      attributes: [{ "name": "VersionID", "type": "UNIQUEIDENTIFIER(36)/Text" }, { "name": "JourneyID", "type": "UNIQUEIDENTIFIER(36)/Text" }, { "name": "JourneyName", "type": "NVARCHAR(200)/Text" }, { "name": "VersionNumber", "type": "INT/Number" }, { "name": "CreatedDate", "type": "DATETIME/Date" }, { "name": "LastPublishedDate", "type": "DATETIME/Date" }, { "name": "ModifiedDate", "type": "DATETIME/Date" }, { "name": "JourneyStatus", "type": "NVARCHAR(100)/Text" }]
    },
    {
      name: "JourneyActivity",
      alias: "_JourneyActivity",
      attributes: [{ "name": "VersionID", "type": "UNIQUEIDENTIFIER(36)/Text" }, { "name": "ActivityID", "type": "UNIQUEIDENTIFIER(36)/Text" }, { "name": "ActivityName", "type": "NVARCHAR(200)/Text" }, { "name": "ActivityExternalKey", "type": "NVARCHAR(200)/Text" }, { "name": "JourneyActivityObjectID", "type": "UNIQUEIDENTIFIER(36)/Text" }, { "name": "ActivityType", "type": "NVARCHAR(512)/Text" }]
    },
    {
      name: "ListSubscribers",
      alias: "_ListSubscribers",
      attributes: [{ "name": "AddedBy", "type": "INT/Number" }, { "name": "AddMethod", "type": "VARCHAR(17)/Text" }, { "name": "CreatedDate", "type": "SMALLDATETIME/Date" }, { "name": "DateUnsubscribed", "type": "SMALLDATETIME/Date" }, { "name": "EmailAddress", "type": "NVARCHAR(254)/Text" }, { "name": "ListID", "type": "INT/Number" }, { "name": "ListName", "type": "VARCHAR(50)/Text" }, { "name": "ListType", "type": "VARCHAR(16)/Text" }, { "name": "Status", "type": "VARCHAR(12)/Text" }, { "name": "SubscriberID", "type": "INT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "SubscriberType", "type": "VARCHAR(100)/Text" }]
    },
    {
      name: "Open",
      alias: "_Open",
      attributes: [{ "name": "AccountID", "type": "INT/Number" }, { "name": "OYBAccountID", "type": "INT/Number" }, { "name": "JobID", "type": "INT/Number" }, { "name": "ListID", "type": "INT/Number" }, { "name": "BatchID", "type": "INT/Number" }, { "name": "SubscriberID", "type": "INT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "EventDate", "type": "DATETIME/Date" }, { "name": "Domain", "type": "VARCHAR(128)/Text" }, { "name": "IsUnique", "type": "BOOL/Boolean" }, { "name": "TriggererSendDefinitionObjectID", "type": "VARCHAR(36)/Text" }, { "name": "TriggeredSendCustomerKey", "type": "VARCHAR(36)/Text" }]
    },
    {
      name: "Sent",
      alias: "_Sent",
      attributes: [{ "name": "AccountID", "type": "INT/Number" }, { "name": "OYBAccountID", "type": "INT/Number" }, { "name": "JobID", "type": "INT/Number" }, { "name": "ListID", "type": "INT/Number" }, { "name": "BatchID", "type": "INT/Number" }, { "name": "SubscriberID", "type": "INT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "EventDate", "type": "DATETIME/Date" }, { "name": "Domain", "type": "VARCHAR(128)/Text" }, { "name": "TriggererSendDefinitionObjectID", "type": "VARCHAR(36)/Text" }, { "name": "TriggeredSendCustomerKey", "type": "VARCHAR(36)/Text" }]
    },
    {
      name: "SMSMessageTracking",
      alias: "_SMSMessageTracking",
      attributes: [{ "name": "MobileMessageTrackingID", "type": "BIGINT/Number" }, { "name": "EID", "type": "BIGINT/Number" }, { "name": "MID", "type": "BIGINT/Number" }, { "name": "Mobile", "type": "VARCHAR(15)/Phone" }, { "name": "MessageID", "type": "INT/Number" }, { "name": "KeywordID", "type": "UNIQUE IDENTIFIER/Text" }, { "name": "CodeID", "type": "UNIQUE IDENTIFIER/Text" }, { "name": "ConversationID", "type": "UNIQUE IDENTIFIER/Text" }, { "name": "ConversationStateID", "type": "UNIQUE IDENTIFIER/Text" }, { "name": "CampaignID", "type": "INT/Number" }, { "name": "Sent", "type": "TINYINT/Boolean" }, { "name": "Delivered", "type": " /Boolean" }, { "name": "Undelivered", "type": "BIT/Boolean" }, { "name": "Outbound", "type": "BIT/Boolean" }, { "name": "Inbound", "type": "BIT/Boolean" }, { "name": "CreateDateTime", "type": "SMALLDATETIME/Date and time" }, { "name": "ModifiedDateTime", "type": "SMALLDATETIME/Date and time" }, { "name": "ActionDateTime", "type": "SMALLDATETIME/Date and Time" }, { "name": "MessageText", "type": "NVARCHAR(160)/Text" }, { "name": "IsTest", "type": "BIT/Boolean" }, { "name": "MobileMessageRecurrenceID", "type": "BIGINT/Number" }, { "name": "ResponseToMobileMessageTrackingID", "type": "BIGINT/Number" }, { "name": "IsValid", "type": "BIT/Boolean" }, { "name": "InvalidationCode", "type": "SMALLINT/Number" }, { "name": "SendID", "type": "BIGINT/Number" }, { "name": "SendSplitID", "type": "BIGINT/Number" }, { "name": "SendSegmentID", "type": "BIGINT/Number" }, { "name": "SendJobID", "type": "BIGINT/Number" }, { "name": "SendGroupID", "type": "BIGINT/Number" }, { "name": "SendPersonID", "type": "BIGINT/Number" }, { "name": "SubscriberID", "type": "BIGINT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "SMSStandardStatusCodeId", "type": "INT/Number" }, { "name": "Description", "type": "NVARCHAR/Text" }, { "name": "Name", "type": "NVARCHAR/Text" }, { "name": "ShortCode", "type": "NVARCHAR/Text" }, { "name": "SharedKeyword", "type": "NVARCHAR/Text" }, { "name": "Ordinal", "type": "TINYINT/Number" }, { "name": "FromName", "type": "NVARCHAR/Text" }, { "name": "JBActivityID", "type": "UNIQUE IDENTIFIER/Text" }, { "name": "JBDefinitionID", "type": "UNIQUE IDENTIFIER/Text" }, { "name": "SMSJobID", "type": "UNIQUE IDENTIFIER/unique identifier" }, { "name": "SMSBatchID", "type": "BIGINT/bigint" }]
    },
    {
      name: "Subscribers",
      alias: "_Subscribers",
      attributes: [{ "name": "SubscriberID", "type": "BIGINT/Number" }, { "name": "DateUndeliverable", "type": "SMALLDATETIME/Date" }, { "name": "DateJoined", "type": "SMALLDATETIME/Date" }, { "name": "DateUnsubscribed", "type": "SMALLDATETIME/Date" }, { "name": "Domain", "type": "NVARCHAR(254)/Text" }, { "name": "EmailAddress", "type": "NVARCHAR(254)/Email" }, { "name": "BounceCount", "type": "SMALLINT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "SubscriberType", "type": "VARCHAR(100)/Text" }, { "name": "Status", "type": "VARCHAR(12)/Text" }, { "name": "Locale", "type": "INT/Locale" }]
    },
    {
      name: "SMSSubscriptionLog",
      alias: "_SMSSubscriptionLog",
      attributes: [{ "name": "LogDate", "type": "DATETIME/Date" }, { "name": "SubscriberKey", "type": "NVARCHAR/Text" }, { "name": "MobileSubscriptionID", "type": "BIGINT/Number" }, { "name": "SubscriptionDefinitionID", "type": "UNIQUE IDENTIFIER/Text" }, { "name": "MobileNumber", "type": "NVARCHAR/Phone" }, { "name": "OptOutStatusID", "type": "TINYINT/Number" }, { "name": "OptOutMethodID", "type": "TINYINT/Number" }, { "name": "OptOutDate", "type": "DATE/Date" }, { "name": "OptInStatusID", "type": "TINYINT/Number" }, { "name": "OptInMethodID", "type": "BIT/Number" }, { "name": "OptInDate", "type": "DATE/Date" }, { "name": "Source", "type": "TINYINT/Number" }, { "name": "CreatedDate", "type": "DATE/Date" }, { "name": "ModifiedDate", "type": "DATE/Date" }]
    },
    {
      name: "SurveyResponse",
      alias: "_SurveyResponse",
      attributes: [{ "name": "AccountID", "type": "INT/Number" }, { "name": "OYBAccountID", "type": "INT/Number" }, { "name": "JobID", "type": "INT/Number" }, { "name": "ListID", "type": "INT/Number" }, { "name": "BatchID", "type": "INT/Number" }, { "name": "SubscriberID", "type": "INT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "EventDate", "type": "DATETIME/Date" }, { "name": "Domain", "type": "VARCHAR(128)/Text" }, { "name": "SurveyID", "type": "INT/Number" }, { "name": "SurveyName", "type": "VARCHAR(100)/Text" }, { "name": "IsUnique", "type": "INT/Number" }, { "name": "QuestionID", "type": "INT/Number" }, { "name": "QuestionName", "type": "VARCHAR(50)/Text" }, { "name": "Question", "type": "VARCHAR(4000)/Text" }, { "name": "AnswerID", "type": "INT/Number" }, { "name": "AnswerName", "type": "VARCHAR(4000)/Text" }, { "name": "Answer", "type": "VARCHAR(4000)/Text" }, { "name": "AnswerData", "type": "NVARCHAR(MAX)/Text" }]
    },
    {
      name: "UnderliverableSMS",
      alias: "_UnderliverableSMS",
      attributes: [{ "name": "AccountID", "type": "INT/Number" }, { "name": "OYBAccountID", "type": "INT/Number" }, { "name": "JobID", "type": "INT/Number" }, { "name": "ListID", "type": "INT/Number" }, { "name": "BatchID", "type": "INT/Number" }, { "name": "SubscriberID", "type": "INT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "EventDate", "type": "DATETIME/Date" }, { "name": "Domain", "type": "VARCHAR(128)/Text" }, { "name": "SurveyID", "type": "INT/Number" }, { "name": "SurveyName", "type": "VARCHAR(100)/Text" }, { "name": "IsUnique", "type": "INT/Number" }, { "name": "QuestionID", "type": "INT/Number" }, { "name": "QuestionName", "type": "VARCHAR(50)/Text" }, { "name": "Question", "type": "VARCHAR(4000)/Text" }, { "name": "AnswerID", "type": "INT/Number" }, { "name": "AnswerName", "type": "VARCHAR(4000)/Text" }, { "name": "Answer", "type": "VARCHAR(4000)/Text" }, { "name": "AnswerData", "type": "NVARCHAR(MAX)/Text" }]
    },
    {
      name: "Unsubscribe",
      alias: "_Unsubscribe",
      attributes: [{ "name": "AccountID", "type": "INT/Number" }, { "name": "OYBAccountID", "type": "INT/Number" }, { "name": "JobID", "type": "BIGINT/Number" }, { "name": "ListID", "type": "INT/Number" }, { "name": "BatchID", "type": "BIGINT/Number" }, { "name": "SubscriberID", "type": "INT/Number" }, { "name": "SubscriberKey", "type": "NVARCHAR(254)/Text" }, { "name": "EventDate", "type": "DATETIME/Date" }, { "name": "IsUnique", "type": "BIT/Boolean" }, { "name": "Domain", "type": "VARCHAR(128)/Text" }]
    }
  ];

  var dataViewContainerExisting = document.querySelectorAll("#dataViewContainer");
  if (dataViewContainerExisting.length > 0) return;

  var dataViewContainer = document.createElement("details");
  dataViewContainer.id = "dataViewContainer";
  var dataViewContainerSummary = document.createElement("summary");
  dataViewContainerSummary.innerText = "Data Views";
  dataViewContainer.append(dataViewContainerSummary);

  var copyAll = document.createElement("button");
  copyAll.innerText = "Copy All";
  copyAll.setAttribute("data-container", "#dataViewContainer");
  dataViewContainerSummary.append(copyAll);

  document.querySelector(".slds-grid.options-panel").insertAdjacentElement("afterend", dataViewContainer);

  dataViews.forEach(d => {
    var dataView = document.createElement("details");
    dataView.id = d.alias;

    var summary = document.createElement("summary");
    summary.innerHTML = "<span>" + d.name + " <br><i>" + d.alias + " as <input class='customAlias' type='text' value='" + d.alias + "' data-default='" + d.alias + "'></i> </span>";
    dataView.append(summary);

    var copyBtn = document.createElement("button");
    copyBtn.innerText = "Copy";
    copyBtn.setAttribute("data-container", "#" + d.alias);
    summary.append(copyBtn);

    d.attributes.forEach(a => {
      var details = document.createElement("label");
      details.classList.add("dataViewAttribute");

      var inp = document.createElement("input");
      inp.type = "checkbox";
      inp.value = d.alias + ".[" + a.name + "]";
      details.append(inp);

      var attribute = document.createElement("span");
      attribute.classList.add("dataViewAttributeName");
      attribute.innerText = a.name;
      details.append(attribute);

      var attributeType = document.createElement("span");
      attributeType.innerHTML = " - <i>" + a.type + "</i>";
      details.append(attributeType);

      dataView.append(details);
    });

    var copyAll = document.createElement("button");
    copyAll.innerText = "Copy All";
    dataViewContainer
    dataViewContainer.append(dataView);
  })

  document.querySelectorAll("#dataViewContainer button").forEach(b => {
    b.addEventListener("click", e => {
      var selected = [];
      document.querySelectorAll(e.target.getAttribute("data-container") + " input:checked").forEach(inp => selected.push(inp.value));
      var copyBox = document.createElement("textarea");
      copyBox.id = "copyBox";
      document.body.append(copyBox);
      copyBox.value = selected.join(",\n");
      copyBox.select();
      document.execCommand("copy");
      close();
      setTimeout(() => {
        copyBox.remove();
      }, 2000)
    });
  });

  document.querySelectorAll("input.customAlias").forEach(c => {
    c.addEventListener("blur", e => {
      if (e.target.value.length == 0) e.target.value = e.target.getAttribute("data-default");
      var alias = e.target.value;
      var relatedAttributes = e.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll("input[type=checkbox]");
      relatedAttributes.forEach(r => r.value = alias + r.value.substring(r.value.indexOf(".")));
    });
  });
});

document.querySelector(".object-explorer.slds-panel").addEventListener("mousemove", () => {
  if (!window.location.href.includes("querystudio.herokuapp.com")) return;
  // console.log("loaded", window.location.href);

  document.querySelectorAll(".oe-table-card:not([style='display: none;']) .oe-field:not(.checkboxed)").forEach(f => {
    f.classList.add("checkboxed");
    var inp = document.createElement("input");
    inp.type = "checkbox";
    inp.value = "[" + f.title.substring(0, f.title.indexOf(" - ")) + "]";
    f.prepend(inp);
  });

  var deInterval = setInterval(() => {

    const deFieldListings = document.querySelectorAll(".oe-table-card:not([style='display: none;'])");
    const deTools = document.querySelectorAll('#copyFieldsBtn');

    if (deFieldListings.length > 0 && deTools.length <= 0) {
      clearInterval(deInterval);

      function copyFields() {
        var selected = [];
        document.querySelectorAll(".oe-table-card:not([style='display: none;']) .oe-field input:checked, #dataViewContainer input:checked").forEach(inp => selected.push(inp.value));
        var copyBox = document.createElement("textarea");
        copyBox.id = "copyBox";
        document.body.append(copyBox);
        copyBox.value = selected.join(",\n");
        copyBox.select();
        document.execCommand("copy");
        close();
        setTimeout(() => {
          copyBox.remove();
        }, 2000);
      }

      var copyFieldsBtn = document.createElement("button");
      copyFieldsBtn.id = "copyFieldsBtn";
      copyFieldsBtn.onclick = copyFields;
      copyFieldsBtn.innerText = "Copy Fields";

      document.querySelector(".slds-panel__body").append(copyFieldsBtn);
    }
  }, 200);
});