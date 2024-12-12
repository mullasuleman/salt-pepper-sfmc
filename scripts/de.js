/** Copyright 2024 Suleman Mulla **/

document.body.addEventListener("mouseenter", () => {
  if (!window.location.href.includes("C12/Default.aspx?entityType=none&entityID=0&ks=ks#Subscribers") || window.ParentWindow) return;
  // console.log("loaded", window.location.href)
  var deInterval = setInterval(() => {

    const deFieldListings = document.querySelectorAll(".de-content-fields-listings");
    const deTools = document.querySelectorAll('#sfmcToolSetSM');

    if (deFieldListings.length > 0 && deTools.length <= 0) {
      clearInterval(deInterval);

      (function () {

        var tf = null;

        var mtf = (t) => {
          var d = new Blob([t], { type: 'text/csv' });
          if (tf !== null) window.URL.revokeObjectURL(tf);
          tf = window.URL.createObjectURL(d);
          return tf;
        };

        var df = (s, fn) => {
          var l = document.createElement('a');
          l.setAttribute('download', `${fn}.csv`);
          l.href = mtf(s);
          l.click();
        };

        var toCSV = (a) => {
          let ok = Object.keys(a[0]);
          const csvString = [
            Object.keys(a[0]),
            ...a.map(item => { let e = []; for (let i in ok) { e.push(item[ok[i]].replaceAll(",", "")) } return e; })
          ]
            .map(e => e.join(","))
            .join("\n");

          return csvString;
        }

        var showToast = (msg) => {
          toast.innerText = msg;
          toast.classList.add("show");
          setTimeout(() => {
            toast.classList.remove("show");
          }, 3000);
        }

        var copy = (msg) => {
          copyBox.value = msg;
          copyBox.select();
          document.execCommand("copy");
          close();
        }

        var getDEFieldList = () => {
          if (document.querySelectorAll(".de-content-fields-listings").length <= 0) {
            showToast("Please open a data extension first");
            return "No Data Extension Found............................... Change iframe context to Email ⇓";
          }
          var fl = [];
          document.querySelectorAll(".de-listing-name-view").forEach(i => fl.push(i.innerText));
          if (fl.length > 0) df(fl.join(), "Blank_" + document.querySelector("#op-head-name-static").value);
          // console.log(fl.join());
          copy(fl.join());
          // navigator.clipboard.writeText(fl.join());
          showToast("Downloading file...");
        }

        var copySQL = () => {
          if (document.querySelectorAll(".de-content-fields-listings").length <= 0) {
            showToast("Please open a data extension first");
            return "No Data Extension Found............................... Change iframe context to Email ⇓";
          }
          var fl = [];
          document.querySelectorAll(".de-listing-name-view").forEach(i => fl.push(i.innerText));
          if (fl.length > 0) {
            let flsql = fl.map(f => "DE.[" + f + "]");
            var sql = "SELECT \n\t" + flsql.join(",\n\t") + " \nFROM \n\t[" + document.querySelector("#op-head-name-static").value + "] as DE"
            copy(sql);
            // navigator.clipboard.writeText(sql);
          }
          showToast("SQL Copied");
        }

        var getDESchema = () => {
          if (document.querySelectorAll(".de-content-fields-listings").length <= 0) {
            showToast("Please open a data extension first");
            return "No Data Extension Found............................... Change iframe context to Email ⇓";
          }
          var fl = [];
          var dp = document.querySelector(".lg-head-breadcrumb").innerText.replaceAll("\n", " ");
          var dn = document.querySelector("#op-head-name-static").value;
          var dk = document.querySelector(".carb-input-popover.op-key-pop").value;
          fl.push("Path: ," + dp + ",,,,\n");
          fl.push("DE Name: ," + dn + ",,,,\n");
          fl.push("External Key: ," + dk + ",,,,\n");
          fl.push(",,,,,\n");
          fl.push("Field Name,Data Type,Length,Primary Key,Nullable,Default Value\n");
          var defl = document.querySelectorAll(".de-content-fields-listing").length - 1;
          document.querySelectorAll(".de-content-fields-listing").forEach((x, i) => {
            if (i == defl) return;
            fl.push(
              x.querySelector(".de-listing-name-view").innerText + "," +
              x.querySelector(".de-content-listing-txt span").innerText + ",\"" +
              x.querySelector(".de-listing-length-view").innerText + "\"," +
              (x.querySelector(".de-content-listing-primary input").checked ? "Yes" : "") + "," +
              (x.querySelector(".de-content-listing-nullable input").checked ? "Yes" : "No") + "," +
              x.querySelector(".de-content-listing-dvalue-view").innerText + "\n"
            );
          });
          if (fl.length > 0) df(fl.join(""), "Schema_" + document.querySelector("#op-head-name-static").value)
          showToast("Downloading file...");
        }

        var getListsFromFolder = () => {
          if (!document.querySelector("#list-grid-prefs")) {
            showToast("Please open List folder");
            return;
          }
          window.sfmcLists = window.sfmcLists || [];
          var pageNo = 1;
          var folder = document.querySelector(".lg-head-breadcrumb.clearfix").innerText.replaceAll("\n", " ").trim() || "My Lists";
          document.querySelector("#list-grid-prefs").click();
          document.querySelectorAll("#count, #listId, #customerKey").forEach(e => e.checked = true)
          document.querySelector("#gridPrefsOkBtn").click();

          var interval = setInterval(() => {
            showToast("Page " + pageNo);
            var rows = document.querySelectorAll(".grp-center.div-center .row");
            var length = rows.length;
            var cols = [];
            document.querySelectorAll(".grp-center.header-center [data-property]").forEach(i => cols.push(i.innerText));

            for (i = 2; i <= length - 1; i++) {
              var listName = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:first-of-type`).innerText;
              var recordCount = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("Subscriber Count") + 1})`).innerText;
              var externalKey = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("External Key") + 1})`).innerText;
              var listID = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("List ID") + 1})`).innerText;

              window.sfmcLists.push({ folder, listName, externalKey, listID, recordCount });
            }

            var nextBtn = document.querySelector(".btn.grid-nextpage");
            if (nextBtn.getAttribute("disabled") == "disabled") {
              clearInterval(interval);
              console.table(window.sfmcLists);
              document.querySelector("#downloadLists span").innerText = " (" + window.sfmcLists.length + ")";
              showToast(window.sfmcLists.length + " Lists Ready");
            }
            nextBtn.click();
            pageNo++;
          }, 5000);
        }

        var getDEsFromFolder = () => {
          if (!document.querySelector("#de-grid-prefs")) {
            showToast("Please open data extension folder");
            return;
          }
          window.sfmcDEs = window.sfmcDEs || [];
          var pageNo = 1;
          var folder = document.querySelector(".dg-head-breadcrumb.clearfix").innerText.replaceAll("\n", " ").trim() || "Data Extensions";
          document.querySelector("#de-grid-prefs").click();
          document.querySelectorAll("#isSendable, #count, #fieldCount, #customerKey, #modifiedDate").forEach(e => e.checked = true)
          document.querySelector("#gridPrefsOkBtn").click();

          var interval = setInterval(() => {
            showToast("Page " + pageNo);
            var rows = document.querySelectorAll(".grp-left.div-left .row");
            var length = rows.length - 1;
            var cols = [];
            document.querySelectorAll(".grp-center.header-center [data-property]").forEach(i => cols.push(i.innerText));

            for (i = 2; i <= length; i++) {
              var deName = document.querySelector(`.grp-left.div-left .row:nth-of-type(${i}) .cell:last-of-type`).innerText;
              var sendable = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("Sendable") + 1})`).innerText;
              var recordCount = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("Record Count") + 1})`).innerText.replaceAll(",", "");
              var fieldCount = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("Field Count") + 1})`).innerText;
              var externalKey = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("External Key") + 1})`).innerText;
              var lastModified = document.querySelector(`.grp-center.div-center .row:nth-of-type(${i}) .cell:nth-of-type(${cols.indexOf("Last Modified Date") + 1})`).innerText;

              window.sfmcDEs.push({ folder, deName, externalKey, sendable, fieldCount, recordCount, lastModified });
            }

            var nextBtn = document.querySelector(".btn.grid-nextpage");
            if (nextBtn.getAttribute("disabled") == "disabled") {
              clearInterval(interval);
              console.table(window.sfmcDEs);
              document.querySelector("#downloadDEs span").innerText = " (" + window.sfmcDEs.length + ")";
              showToast(window.sfmcDEs.length + " DEs Ready");
            }
            nextBtn.click();
            pageNo++;
          }, 1000);
        }

        var downloadDEs = (e) => {
          if (!window.sfmcDEs) return;
          var csv = toCSV(window.sfmcDEs);
          if (csv.length > 0) df(csv, "DEs_" + (new Date()).toLocaleDateString());
          showToast("Downloading file...");
        }

        var downloadLists = (e) => {
          if (!window.sfmcLists) return;
          var csv = toCSV(window.sfmcLists);
          if (csv.length > 0) df(csv, "Lists_" + (new Date()).toLocaleDateString());
          showToast("Downloading file...");
        }

        var DETools = [
          // {
          //   id: "getDEsFromFolder",
          //   func: getDEsFromFolder,
          //   label: "Scrape DEs"
          // },
          // {
          //   id: "downloadDEs",
          //   func: downloadDEs,
          //   label: "Download DE List"
          // },
          // {
          //   id: "getListsFromFolder",
          //   func: getListsFromFolder,
          //   label: "Scrape Lists"
          // },
          // {
          //   id: "downloadLists",
          //   func: downloadLists,
          //   label: "Download Lists"
          // },
          {
            id: "getDESchema",
            func: getDESchema,
            label: "Download Schema"
          },
          {
            id: "getDEFieldList",
            func: getDEFieldList,
            label: "Download Blank CSV with Headers"
          },
          {
            id: "copySQL",
            func: copySQL,
            label: "Copy SQL"
          },
        ]

        var div = document.createElement("div");
        div.id = "sfmcToolSetSM";


        DETools.forEach(t => {
          let btn = document.createElement("button");
          btn.id = t.id;
          btn.onclick = t.func;
          btn.innerText = t.label;
          div.append(btn);
        });

        var toast = document.createElement("div");
        toast.id = "toastSM";
        toast.innerText = "Loaded!";

        div.append(toast);

        var copyBox = document.createElement("textarea");
        copyBox.id = "copyBox";
        div.append(copyBox);

        if (document.querySelectorAll(".de-content-fields-listings").length > 0) {
          var managePolicyButtonContainer = document.querySelector("#op-head-manage-send");
          managePolicyButtonContainer.prepend(div);
          // document.querySelector("#downloadDEs").append(document.createElement("span"));
          // document.querySelector("#downloadLists").append(document.createElement("span"));
        } else {
          return "Please change iframe context by inspecting an element inside the Data Extension list/details view."
        }
      })();
    }
  }, 200);
})