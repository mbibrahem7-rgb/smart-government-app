/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("services");

  const record0 = new Record(collection);
    record0.set("name", "\u062a\u062c\u062f\u064a\u062f \u0631\u062e\u0635\u0629 \u0642\u064a\u0627\u062f\u0629");
    record0.set("steps", ["\u062a\u062d\u0636\u064a\u0631 \u0627\u0644\u0648\u062b\u0627\u0626\u0642", "\u0627\u0644\u0630\u0647\u0627\u0628 \u0644\u0644\u0645\u0631\u0648\u0631", "\u0627\u0644\u0641\u062d\u0635 \u0627\u0644\u0637\u0628\u064a", "\u062f\u0641\u0639 \u0627\u0644\u0631\u0633\u0648\u0645", "\u0627\u0633\u062a\u0644\u0627\u0645 \u0627\u0644\u0631\u062e\u0635\u0629"]);
    record0.set("documents", ["\u0628\u0637\u0627\u0642\u0629 \u0647\u0648\u064a\u0629", "\u0634\u0647\u0627\u062f\u0629 \u0637\u0628\u064a\u0629", "\u0635\u0648\u0631\u062a\u0627\u0646"]);
    record0.set("fees", "25 \u062f\u064a\u0646\u0627\u0631");
    record0.set("serviceUrl", "https://www.moi.gov.jo");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("name", "\u062c\u0648\u0627\u0632 \u0633\u0641\u0631");
    record1.set("steps", ["\u062a\u0639\u0628\u0626\u0629 \u0627\u0644\u0646\u0645\u0648\u0630\u062c", "\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0648\u062b\u0627\u0626\u0642", "\u0627\u0644\u062f\u0641\u0639", "\u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631", "\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645"]);
    record1.set("documents", ["\u0628\u0637\u0627\u0642\u0629 \u0647\u0648\u064a\u0629", "\u0634\u0647\u0627\u062f\u0629 \u0645\u064a\u0644\u0627\u062f", "\u0635\u0648\u0631\u062a\u0627\u0646"]);
    record1.set("fees", "50 \u062f\u064a\u0646\u0627\u0631");
    record1.set("serviceUrl", "https://www.moi.gov.jo");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("name", "\u0634\u0647\u0627\u062f\u0629 \u0645\u064a\u0644\u0627\u062f");
    record2.set("steps", ["\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0637\u0644\u0628", "\u0627\u0644\u062a\u062d\u0642\u0642", "\u0627\u0644\u062f\u0641\u0639", "\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645"]);
    record2.set("documents", ["\u0628\u0637\u0627\u0642\u0629 \u0648\u0627\u0644\u062f", "\u0628\u0637\u0627\u0642\u0629 \u0648\u0627\u0644\u062f\u0629"]);
    record2.set("fees", "5 \u062f\u0646\u0627\u0646\u064a\u0631");
    record2.set("serviceUrl", "https://www.moi.gov.jo");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("name", "\u0631\u062e\u0635\u0629 \u062a\u062c\u0627\u0631\u064a\u0629");
    record3.set("steps", ["\u062a\u062d\u0636\u064a\u0631 \u0627\u0644\u0648\u062b\u0627\u0626\u0642", "\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0637\u0644\u0628", "\u0627\u0644\u0641\u062d\u0635", "\u0627\u0644\u062f\u0641\u0639", "\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645"]);
    record3.set("documents", ["\u0628\u0637\u0627\u0642\u0629 \u0647\u0648\u064a\u0629", "\u0639\u0642\u062f \u0625\u064a\u062c\u0627\u0631", "\u0634\u0647\u0627\u062f\u0629 \u0636\u0631\u064a\u0628\u064a\u0629"]);
    record3.set("fees", "100 \u062f\u064a\u0646\u0627\u0631");
    record3.set("serviceUrl", "https://www.moi.gov.jo");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("name", "\u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0628\u0637\u0627\u0642\u0629 \u0647\u0648\u064a\u0629");
    record4.set("steps", ["\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0637\u0644\u0628", "\u0627\u0644\u0641\u062d\u0635", "\u0627\u0644\u062f\u0641\u0639", "\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645"]);
    record4.set("documents", ["\u0634\u0647\u0627\u062f\u0629 \u0645\u064a\u0644\u0627\u062f", "\u0635\u0648\u0631\u062a\u0627\u0646"]);
    record4.set("fees", "15 \u062f\u064a\u0646\u0627\u0631");
    record4.set("serviceUrl", "https://www.moi.gov.jo");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("name", "\u062a\u062c\u062f\u064a\u062f \u0627\u0644\u062c\u0648\u0627\u0632");
    record5.set("steps", ["\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0637\u0644\u0628", "\u0627\u0644\u0641\u062d\u0635", "\u0627\u0644\u062f\u0641\u0639", "\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645"]);
    record5.set("documents", ["\u062c\u0648\u0627\u0632 \u0642\u062f\u064a\u0645", "\u0635\u0648\u0631\u062a\u0627\u0646"]);
    record5.set("fees", "40 \u062f\u064a\u0646\u0627\u0631");
    record5.set("serviceUrl", "https://www.moi.gov.jo");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("name", "\u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0634\u0647\u0627\u062f\u0629 \u0648\u0641\u0627\u0629");
    record6.set("steps", ["\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0637\u0644\u0628", "\u0627\u0644\u062a\u062d\u0642\u0642", "\u0627\u0644\u062f\u0641\u0639", "\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645"]);
    record6.set("documents", ["\u0628\u0637\u0627\u0642\u0629 \u0647\u0648\u064a\u0629", "\u0634\u0647\u0627\u062f\u0629 \u0637\u0628\u064a\u0629"]);
    record6.set("fees", "5 \u062f\u0646\u0627\u0646\u064a\u0631");
    record6.set("serviceUrl", "https://www.moi.gov.jo");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("name", "\u062a\u0633\u062c\u064a\u0644 \u0639\u0642\u0627\u0631");
    record7.set("steps", ["\u062a\u062d\u0636\u064a\u0631 \u0627\u0644\u0648\u062b\u0627\u0626\u0642", "\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0637\u0644\u0628", "\u0627\u0644\u0641\u062d\u0635", "\u0627\u0644\u062f\u0641\u0639", "\u0627\u0644\u062a\u0633\u062c\u064a\u0644"]);
    record7.set("documents", ["\u0635\u0643 \u0645\u0644\u0643\u064a\u0629", "\u0628\u0637\u0627\u0642\u0629 \u0647\u0648\u064a\u0629", "\u0639\u0642\u062f \u0628\u064a\u0639"]);
    record7.set("fees", "200 \u062f\u064a\u0646\u0627\u0631");
    record7.set("serviceUrl", "https://www.moi.gov.jo");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
