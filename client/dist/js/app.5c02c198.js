(function(e) {
  function t(t) {
    for (
      var s, i, o = t[0], l = t[1], d = t[2], u = 0, p = [];
      u < o.length;
      u++
    )
      (i = o[u]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && p.push(r[i][0]),
        (r[i] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
    c && c(t);
    while (p.length) p.shift()();
    return n.push.apply(n, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], s = !0, o = 1; o < a.length; o++) {
        var l = a[o];
        0 !== r[l] && (s = !1);
      }
      s && (n.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var s = {},
    r = { app: 0 },
    n = [];
  function i(t) {
    if (s[t]) return s[t].exports;
    var a = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = s),
    (i.d = function(e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (i.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          i.d(
            a,
            s,
            function(t) {
              return e[t];
            }.bind(null, s)
          );
      return a;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var d = 0; d < o.length; d++) t(o[d]);
  var c = l;
  n.push([0, "chunk-vendors"]), a();
})({
  0: function(e, t, a) {
    e.exports = a("56d7");
  },
  "56d7": function(e, t, a) {
    "use strict";
    a.r(t);
    var s = a("2b0e"),
      r = function() {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-app",
          [
            a(
              "v-app-bar",
              { attrs: { app: "", color: "primary", dense: "", dark: "" } },
              [
                a(
                  "v-col",
                  { attrs: { align: "start", justify: "start" } },
                  [
                    e.isAuth
                      ? a("v-btn", { attrs: { text: "", to: "/myGoals" } }, [
                          e._v("Meine Ziele"),
                        ])
                      : e._e(),
                    e.isAuth && "Lehrperson" === e.role
                      ? a("v-btn", { attrs: { text: "", to: "/allGoals" } }, [
                          e._v("Alle Ziele"),
                        ])
                      : e._e(),
                  ],
                  1
                ),
                a("v-toolbar-title", [e._v("Tagesplaner")]),
                a(
                  "v-col",
                  { attrs: { align: "right", justify: "right" } },
                  [
                    e.isAuth
                      ? e._e()
                      : a("v-btn", { attrs: { text: "", to: "/login" } }, [
                          e._v("Login"),
                        ]),
                    e.isAuth
                      ? e._e()
                      : a("v-btn", { attrs: { text: "", to: "/register" } }, [
                          e._v("Registrieren"),
                        ]),
                    e.isAuth
                      ? a("v-btn", { attrs: { text: "", to: "/profile" } }, [
                          e._v(e._s(e.username) + "s Profil"),
                        ])
                      : e._e(),
                    e.isAuth
                      ? a(
                          "v-btn",
                          { attrs: { text: "" }, on: { click: e.logout } },
                          [e._v("Logout")]
                        )
                      : e._e(),
                  ],
                  1
                ),
              ],
              1
            ),
            a(
              "v-content",
              { staticClass: "grey lighten-3" },
              [
                a(
                  "v-container",
                  { attrs: { "text-center": "" } },
                  [
                    a(
                      "v-layout",
                      {
                        attrs: {
                          wrap: "",
                          "align-center": "",
                          "justify-center": "",
                        },
                      },
                      [a("router-view")],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      n = [],
      i = {
        name: "App",
        data: () => ({ isAuth: "", username: "", role: "" }),
        methods: {
          init() {
            (this.isAuth = this.$store.getters.isLoggedIn),
              this.isAuth &&
                ((this.username = this.$store.getters.getUser.username),
                (this.role = this.$store.getters.getUser.role));
          },
          logout() {
            (this.isAuth = !1),
              this.$store.dispatch("logout"),
              this.$router.push("/login");
          },
        },
        mounted() {
          this.init();
        },
        updated() {
          this.init();
        },
      },
      o = i,
      l = a("2877"),
      d = a("6544"),
      c = a.n(d),
      u = a("7496"),
      p = a("40dc"),
      m = a("8336"),
      h = a("62ad"),
      v = a("a523"),
      g = a("a75b"),
      f = a("a722"),
      w = a("2a7f"),
      b = Object(l["a"])(o, r, n, !1, null, null, null),
      x = b.exports;
    c()(b, {
      VApp: u["a"],
      VAppBar: p["a"],
      VBtn: m["a"],
      VCol: h["a"],
      VContainer: v["a"],
      VContent: g["a"],
      VLayout: f["a"],
      VToolbarTitle: w["a"],
    });
    var y = a("8c4f"),
      _ = function() {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-card",
          { attrs: { width: "80%" } },
          [
            a(
              "v-toolbar",
              { attrs: { color: "primary", dark: "", flat: "" } },
              [
                a(
                  "v-col",
                  [
                    a(
                      "v-btn",
                      {
                        attrs: { text: "", icon: "" },
                        on: {
                          click: function(t) {
                            return e.changeDate(-1);
                          },
                        },
                      },
                      [a("v-icon", [e._v("mdi-arrow-left-bold")])],
                      1
                    ),
                  ],
                  1
                ),
                a(
                  "v-col",
                  [a("v-toolbar-title", [e._v(e._s(e.dateFormatted))])],
                  1
                ),
                a(
                  "v-col",
                  [
                    e.deviation < 0
                      ? a(
                          "v-btn",
                          {
                            attrs: { text: "", icon: "" },
                            on: {
                              click: function(t) {
                                return e.changeDate(1);
                              },
                            },
                          },
                          [a("v-icon", [e._v("mdi-arrow-right-bold")])],
                          1
                        )
                      : e._e(),
                  ],
                  1
                ),
              ],
              1
            ),
            0 === e.deviation
              ? a(
                  "div",
                  [
                    a(
                      "div",
                      { staticClass: "ma-4 pa-2" },
                      [
                        e.goalForm
                          ? a(
                              "v-form",
                              { ref: "create", staticClass: "justify-center" },
                              [
                                [
                                  a("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      label: "Ziel",
                                      rules: e.goalRules,
                                      counter: "30",
                                    },
                                    model: {
                                      value: e.newGoal.goal,
                                      callback: function(t) {
                                        e.$set(e.newGoal, "goal", t);
                                      },
                                      expression: "newGoal.goal",
                                    },
                                  }),
                                  a("v-textarea", {
                                    attrs: {
                                      outlined: "",
                                      label: "Beschreibung",
                                      rules: e.descriptionRules,
                                      counter: "2000",
                                    },
                                    model: {
                                      value: e.newGoal.description,
                                      callback: function(t) {
                                        e.$set(e.newGoal, "description", t);
                                      },
                                      expression: "newGoal.description",
                                    },
                                  }),
                                  a(
                                    "v-btn",
                                    {
                                      staticClass: "mr-2",
                                      attrs: { color: "error" },
                                      on: {
                                        click: function(t) {
                                          e.goalForm = !1;
                                        },
                                      },
                                    },
                                    [e._v("Schliessen")]
                                  ),
                                  a(
                                    "v-btn",
                                    {
                                      attrs: { color: "success" },
                                      on: { click: e.validateCreate },
                                    },
                                    [e._v("Ziel hinzufügen")]
                                  ),
                                ],
                              ],
                              2
                            )
                          : a(
                              "v-btn",
                              {
                                attrs: { color: "primary" },
                                on: {
                                  click: function(t) {
                                    e.goalForm = !0;
                                  },
                                },
                              },
                              [e._v("Ziele hinzufügen")]
                            ),
                      ],
                      1
                    ),
                    a("v-divider"),
                  ],
                  1
                )
              : e._e(),
            a(
              "v-form",
              { ref: "update" },
              [
                a(
                  "v-menu",
                  {
                    attrs: {
                      absolute: "",
                      "close-on-content-click": !1,
                      "nudge-width": 500,
                      "position-x": 350,
                      "position-y": 200,
                    },
                    model: {
                      value: e.menu,
                      callback: function(t) {
                        e.menu = t;
                      },
                      expression: "menu",
                    },
                  },
                  [
                    a(
                      "v-card",
                      [
                        a(
                          "v-list",
                          [
                            a(
                              "v-list-item",
                              [
                                a(
                                  "v-list-item-content",
                                  [
                                    a(
                                      "v-list-item-title",
                                      [
                                        a("v-text-field", {
                                          staticClass: "mt-1",
                                          attrs: {
                                            outlined: "",
                                            label: "Ziel",
                                            rules: e.goalRules,
                                            counter: "30",
                                          },
                                          model: {
                                            value: e.editedGoal.goal,
                                            callback: function(t) {
                                              e.$set(e.editedGoal, "goal", t);
                                            },
                                            expression: "editedGoal.goal",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        a("v-divider"),
                        a(
                          "v-list",
                          [
                            a(
                              "v-list-item",
                              [
                                a(
                                  "v-list-item-content",
                                  [
                                    a("v-textarea", {
                                      attrs: {
                                        outlined: "",
                                        overflow: "",
                                        label: "Beschreibung",
                                        rules: e.descriptionRules,
                                        counter: "2000",
                                      },
                                      model: {
                                        value: e.editedGoal.description,
                                        callback: function(t) {
                                          e.$set(
                                            e.editedGoal,
                                            "description",
                                            t
                                          );
                                        },
                                        expression: "editedGoal.description",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        a("v-divider"),
                        a(
                          "v-list",
                          [
                            a(
                              "v-list-item",
                              [
                                a(
                                  "v-list-item-content",
                                  [
                                    a("v-textarea", {
                                      attrs: {
                                        outlined: "",
                                        overflow: "",
                                        label:
                                          "Was ist gut gelaufen? Warum evtl. nicht fertig geworden?",
                                        rules: [e.commentRules],
                                        counter: "255",
                                      },
                                      model: {
                                        value: e.editedGoal.comment,
                                        callback: function(t) {
                                          e.$set(e.editedGoal, "comment", t);
                                        },
                                        expression: "editedGoal.comment",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        a(
                          "v-card-actions",
                          [
                            a("v-spacer"),
                            a(
                              "v-btn",
                              {
                                attrs: { text: "" },
                                on: {
                                  click: function(t) {
                                    e.menu = !1;
                                  },
                                },
                              },
                              [e._v("Abbrechen")]
                            ),
                            a(
                              "v-btn",
                              {
                                attrs: { color: "primary", text: "" },
                                on: {
                                  click: function(t) {
                                    return e.validateUpdate();
                                  },
                                },
                              },
                              [e._v("Speichern")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            e.filteredGoals.length
              ? a(
                  "v-expansion-panels",
                  {
                    attrs: { multiple: "", focusable: "" },
                    model: {
                      value: e.panel,
                      callback: function(t) {
                        e.panel = t;
                      },
                      expression: "panel",
                    },
                  },
                  e._l(e.filteredGoals, function(t, s) {
                    return a(
                      "v-expansion-panel",
                      { key: s },
                      [
                        a("v-divider"),
                        a(
                          "v-expansion-panel-header",
                          [
                            a("v-col", { staticClass: "text-center ml-4" }, [
                              e._v(e._s(t.goal)),
                            ]),
                          ],
                          1
                        ),
                        0 === e.deviation
                          ? a(
                              "div",
                              { staticClass: "ma-2" },
                              [
                                t.finished
                                  ? a(
                                      "v-btn",
                                      {
                                        attrs: {
                                          outlined: "",
                                          color: "success",
                                        },
                                        on: {
                                          click: function(a) {
                                            return e.finishGoal(t);
                                          },
                                        },
                                      },
                                      [a("v-icon", [e._v("mdi-check")])],
                                      1
                                    )
                                  : a(
                                      "v-btn",
                                      {
                                        attrs: { outlined: "", color: "error" },
                                        on: {
                                          click: function(a) {
                                            return e.finishGoal(t);
                                          },
                                        },
                                      },
                                      [a("v-icon", [e._v("mdi-close")])],
                                      1
                                    ),
                                a(
                                  "v-btn",
                                  {
                                    staticClass: "ml-2 mr-2",
                                    attrs: {
                                      outlined: "",
                                      color: "indigo",
                                      dark: "",
                                    },
                                    on: {
                                      click: function(a) {
                                        return e.editGoal(t);
                                      },
                                    },
                                  },
                                  [a("v-icon", [e._v("mdi-pencil")])],
                                  1
                                ),
                                a(
                                  "v-btn",
                                  {
                                    staticClass: "mr-2",
                                    attrs: {
                                      outlined: "",
                                      color: "error",
                                      dark: "",
                                    },
                                    on: {
                                      click: function(a) {
                                        return e.deleteGoal(t);
                                      },
                                    },
                                  },
                                  [a("v-icon", [e._v("mdi-trash-can")])],
                                  1
                                ),
                              ],
                              1
                            )
                          : a("div", { staticClass: "ma-2" }, [
                              t.finished
                                ? a("p", { staticClass: "success--text" }, [
                                    e._v("Wurde fertig gemacht."),
                                  ])
                                : a("p", { staticClass: "error--text" }, [
                                    e._v("Wurde nicht fertig gemacht."),
                                  ]),
                            ]),
                        a(
                          "v-expansion-panel-content",
                          {
                            on: {
                              click: function(t) {
                                e.menu = !1;
                              },
                            },
                          },
                          [
                            a("v-divider"),
                            a("div", { staticClass: "ma-3" }, [
                              e._v(e._s(t.description)),
                            ]),
                            t.comment
                              ? a(
                                  "v-alert",
                                  {
                                    staticClass: "mt-2",
                                    attrs: {
                                      dense: "",
                                      text: "",
                                      type: "info",
                                      width: "96%",
                                    },
                                  },
                                  [e._v(e._s(t.comment))]
                                )
                              : e._e(),
                          ],
                          1
                        ),
                      ],
                      1
                    );
                  }),
                  1
                )
              : e._e(),
            e.loading
              ? a("v-progress-linear", {
                  staticClass: "pa-1",
                  attrs: { indeterminate: "" },
                })
              : e._e(),
            e.filteredGoals.length || e.loading
              ? e._e()
              : a("v-toolbar", [e._v("Keine Einträge gefunden.")]),
          ],
          1
        );
      },
      k = [],
      V = a("bc3a"),
      D = a.n(V),
      G = {
        name: "MyGoals",
        data: () => ({
          loading: !0,
          dateFormatted: "",
          deviation: 0,
          myId: "",
          myGoals: [],
          panel: [],
          menu: !1,
          editedIndex: "",
          editedGoal: {},
          goalForm: !1,
          newGoal: { goal: "", description: "", date: "", userFK: "" },
          goalRules: [
            (e) => !!e || "Bitte Name des Ziels hinzufügen",
            (e) =>
              (e && e.length <= 30) ||
              "Der Name des Ziels darf maximal 30 Zeichen lang sein.",
          ],
          descriptionRules: [
            (e) => !!e || "Bitte Beschreibung des Ziels hinzufügen",
            (e) =>
              (e && e.length <= 2e3) ||
              "Die Beschreibung des Ziels darf maximal 2000 Zeichen lang sein.",
          ],
        }),
        created() {
          this.$store.getters.isLoggedIn || this.$router.push("/login"),
            this.init();
        },
        methods: {
          commentRules() {
            return (
              !(
                this.editedGoal.comment && this.editedGoal.comment.length >= 255
              ) || "Der Kommentar des Ziels darf maximal 255 Zeichen lang sein."
            );
          },
          async init() {
            this.changeDate(0),
              (this.myId = this.$store.getters.getUser.id),
              (this.myGoals = await D.a
                .get(`/api/goal/getForUser/${this.myId}`)
                .then((e) => e.data)
                .catch((e) => console.log(e))),
              (this.loading = !1),
              (this.newGoal = {
                date: this.dateFormatted,
                userFK: this.myId,
                finished: 0,
              });
          },
          editGoal(e) {
            setTimeout(() => (this.menu = !0), 1),
              (this.editedIndex = this.myGoals.indexOf(e)),
              (this.editedGoal = {
                id: e.id,
                goal: e.goal,
                description: e.description,
                comment: e.comment,
              });
          },
          validateCreate() {
            this.$refs.create.validate() && this.createGoal();
          },
          validateUpdate() {
            this.$refs.update.validate() && this.updateGoal();
          },
          async createGoal() {
            (this.newGoal.id = await D.a
              .post("/api/goal/create", this.newGoal)
              .then((e) => e.data[0])
              .catch((e) => console.log(e))),
              this.myGoals.push(this.newGoal),
              (this.newGoal = {
                date: this.dateFormatted,
                userFK: this.myId,
                finished: 0,
              }),
              this.$refs.create.resetValidation();
          },
          async updateGoal() {
            await D.a
              .put("/api/goal/update", this.editedGoal)
              .then((e) => e.data)
              .catch((e) => console.log(e));
            Object.assign(this.myGoals[this.editedIndex], this.editedGoal),
              (this.menu = !1);
          },
          async deleteGoal(e) {
            var t = this.myGoals.indexOf(e);
            this.myGoals.splice(t, 1), D.a.delete(`/api/goal/delete/${e.id}`);
          },
          finishGoal(e) {
            (e.finished = e.finished ? 0 : 1),
              D.a.put("/api/goal/update", { id: e.id, finished: e.finished });
          },
          changeDate(e) {
            (this.panel = []), (this.deviation += e);
            var t = new Date(),
              a = t.setDate(t.getDate() + this.deviation);
            this.dateFormatted = this.formatDate(a);
          },
          formatDate(e) {
            var t = new Date(e),
              a = t.getFullYear(),
              s = "" + (t.getMonth() + 1),
              r = "" + t.getDate();
            return (
              s.length < 2 && (s = "0" + s),
              r.length < 2 && (r = "0" + r),
              [a, s, r].join("-")
            );
          },
        },
        computed: {
          filteredGoals() {
            let e = this.myGoals;
            return (e = e.filter((e) => e.date == this.dateFormatted)), e;
          },
        },
      },
      P = G,
      $ = a("0798"),
      R = a("b0af"),
      C = a("99d9"),
      F = a("ce7e"),
      T = a("cd55"),
      L = a("49e2"),
      A = a("c865"),
      B = a("0393"),
      O = a("4bd4"),
      M = a("132d"),
      U = a("8860"),
      j = a("da13"),
      I = a("5d23"),
      Z = a("e449"),
      E = a("8e36"),
      S = a("2fa4"),
      N = a("8654"),
      z = a("a844"),
      K = a("71d9"),
      W = Object(l["a"])(P, _, k, !1, null, null, null),
      H = W.exports;
    c()(W, {
      VAlert: $["a"],
      VBtn: m["a"],
      VCard: R["a"],
      VCardActions: C["a"],
      VCol: h["a"],
      VDivider: F["a"],
      VExpansionPanel: T["a"],
      VExpansionPanelContent: L["a"],
      VExpansionPanelHeader: A["a"],
      VExpansionPanels: B["a"],
      VForm: O["a"],
      VIcon: M["a"],
      VList: U["a"],
      VListItem: j["a"],
      VListItemContent: I["a"],
      VListItemTitle: I["b"],
      VMenu: Z["a"],
      VProgressLinear: E["a"],
      VSpacer: S["a"],
      VTextField: N["a"],
      VTextarea: z["a"],
      VToolbar: K["a"],
      VToolbarTitle: w["a"],
    });
    var J = function() {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-card",
          { attrs: { width: "80%" } },
          [
            a(
              "v-toolbar",
              { attrs: { color: "primary", dark: "", flat: "" } },
              [
                a(
                  "v-col",
                  [
                    a(
                      "v-btn",
                      {
                        attrs: { text: "", icon: "" },
                        on: {
                          click: function(t) {
                            return e.changeDate(-1);
                          },
                        },
                      },
                      [a("v-icon", [e._v("mdi-arrow-left-bold")])],
                      1
                    ),
                  ],
                  1
                ),
                a(
                  "v-col",
                  [a("v-toolbar-title", [e._v(e._s(e.dateFormatted))])],
                  1
                ),
                a(
                  "v-col",
                  [
                    e.deviation < 0
                      ? a(
                          "v-btn",
                          {
                            attrs: { text: "", icon: "" },
                            on: {
                              click: function(t) {
                                return e.changeDate(1);
                              },
                            },
                          },
                          [a("v-icon", [e._v("mdi-arrow-right-bold")])],
                          1
                        )
                      : e._e(),
                  ],
                  1
                ),
              ],
              1
            ),
            a(
              "v-toolbar",
              [
                a(
                  "v-col",
                  [
                    a("v-text-field", {
                      staticClass: "mr-2",
                      attrs: {
                        outlined: "",
                        "hide-details": "",
                        "prepend-inner-icon": "mdi-magnify",
                        label: "Namenssuche",
                      },
                      model: {
                        value: e.searchName,
                        callback: function(t) {
                          e.searchName = t;
                        },
                        expression: "searchName",
                      },
                    }),
                  ],
                  1
                ),
                a(
                  "v-col",
                  [
                    a("v-select", {
                      staticClass: "mr-2",
                      attrs: {
                        outlined: "",
                        clearable: "",
                        "hide-details": "",
                        items: e.grades,
                        "prepend-inner-icon": "mdi-magnify",
                        label: "Klasse",
                      },
                      model: {
                        value: e.filterGrade,
                        callback: function(t) {
                          e.filterGrade = t;
                        },
                        expression: "filterGrade",
                      },
                    }),
                  ],
                  1
                ),
                a(
                  "v-col",
                  [
                    a("v-select", {
                      attrs: {
                        outlined: "",
                        clearable: "",
                        "hide-details": "",
                        items: e.status,
                        "prepend-inner-icon": "mdi-magnify",
                        label: "Status",
                      },
                      model: {
                        value: e.filterFinished,
                        callback: function(t) {
                          e.filterFinished = t;
                        },
                        expression: "filterFinished",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            a("v-divider"),
            e.filteredGoals.length
              ? a(
                  "v-expansion-panels",
                  {
                    attrs: { multiple: "", focusable: "" },
                    model: {
                      value: e.panel,
                      callback: function(t) {
                        e.panel = t;
                      },
                      expression: "panel",
                    },
                  },
                  e._l(e.filteredGoals, function(t, s) {
                    return a(
                      "v-expansion-panel",
                      { key: s },
                      [
                        a(
                          "v-expansion-panel-header",
                          [
                            a("v-col", [
                              e._v(
                                e._s(t.grade) + " " + e._s(t.userfull) + ":"
                              ),
                            ]),
                            a("v-col", [e._v(e._s(t.goal))]),
                            t.finished
                              ? a("p", { staticClass: "success--text" }, [
                                  e._v("Fertig"),
                                ])
                              : a("p", { staticClass: "error--text" }, [
                                  e._v("Nicht Fertig"),
                                ]),
                          ],
                          1
                        ),
                        a(
                          "v-expansion-panel-content",
                          { staticClass: "mt-3" },
                          [
                            e._v(" " + e._s(t.description) + " "),
                            t.comment
                              ? a(
                                  "v-alert",
                                  {
                                    staticClass: "mt-2",
                                    attrs: {
                                      dense: "",
                                      text: "",
                                      type: "info",
                                      width: "96%",
                                    },
                                  },
                                  [e._v(e._s(t.comment))]
                                )
                              : e._e(),
                          ],
                          1
                        ),
                      ],
                      1
                    );
                  }),
                  1
                )
              : e._e(),
            e.loading
              ? a("v-progress-linear", {
                  staticClass: "pa-1",
                  attrs: { indeterminate: "" },
                })
              : e._e(),
            e.filteredGoals.length || e.loading
              ? e._e()
              : a("v-toolbar", [e._v("Keine Einträge gefunden.")]),
          ],
          1
        );
      },
      Y = [],
      q = {
        name: "AllGoals",
        data: () => ({
          loading: !0,
          dateFormatted: "",
          deviation: 0,
          allGoals: [],
          panel: [],
          searchName: "",
          filterGrade: "",
          grades: ["in17", "in18", "in19"],
          filterFinished: "",
          status: ["Nicht Fertig", "Fertig"],
        }),
        created() {
          "Lehrperson" !== this.$store.getters.getUser.role &&
            this.$router.push("/myGoals"),
            this.init();
        },
        methods: {
          async init() {
            this.changeDate(0),
              (this.allGoals = await D.a
                .get("/api/goal/getAll")
                .then((e) => e.data)
                .catch((e) => console.log(e))),
              (this.loading = !1);
          },
          changeDate(e) {
            (this.panel = []), (this.deviation += e);
            var t = new Date(),
              a = t.setDate(t.getDate() + this.deviation);
            this.dateFormatted = this.formatDate(a);
          },
          formatDate(e) {
            var t = new Date(e),
              a = t.getFullYear(),
              s = "" + (t.getMonth() + 1),
              r = "" + t.getDate();
            return (
              s.length < 2 && (s = "0" + s),
              r.length < 2 && (r = "0" + r),
              [a, s, r].join("-")
            );
          },
        },
        computed: {
          filteredGoals() {
            let e = this.allGoals;
            return (
              (e = e.filter(
                (e) =>
                  e.date == this.dateFormatted &&
                  e.userfull
                    .toLowerCase()
                    .indexOf(this.searchName.toLowerCase()) > -1
              )),
              this.filterGrade &&
                (e = e.filter((e) => e.grade == this.filterGrade)),
              "Nicht Fertig" == this.filterFinished &&
                (e = e.filter((e) => 0 == e.finished)),
              "Fertig" == this.filterFinished &&
                (e = e.filter((e) => 1 == e.finished)),
              e
            );
          },
        },
      },
      Q = q,
      X = a("b974"),
      ee = Object(l["a"])(Q, J, Y, !1, null, null, null),
      te = ee.exports;
    c()(ee, {
      VAlert: $["a"],
      VBtn: m["a"],
      VCard: R["a"],
      VCol: h["a"],
      VDivider: F["a"],
      VExpansionPanel: T["a"],
      VExpansionPanelContent: L["a"],
      VExpansionPanelHeader: A["a"],
      VExpansionPanels: B["a"],
      VIcon: M["a"],
      VProgressLinear: E["a"],
      VSelect: X["a"],
      VTextField: N["a"],
      VToolbar: K["a"],
      VToolbarTitle: w["a"],
    });
    var ae = function() {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-col",
          { attrs: { cols: "12", sm: "8", md: "6" } },
          [
            a(
              "v-card",
              [
                a(
                  "v-toolbar",
                  { attrs: { color: "primary", dark: "", flat: "" } },
                  [a("v-toolbar-title", [e._v("Profil")])],
                  1
                ),
                e._l(e.myProfile, function(t, s, r) {
                  return a(
                    "v-row",
                    { key: r, attrs: { "no-gutters": "" } },
                    [
                      a(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          a(
                            "v-card",
                            { attrs: { tile: "", outlined: "" } },
                            [a("v-card-title", [e._v(e._s(s) + ":")])],
                            1
                          ),
                        ],
                        1
                      ),
                      a(
                        "v-col",
                        { attrs: { cols: "8" } },
                        [
                          a(
                            "v-card",
                            { attrs: { tile: "", outlined: "" } },
                            [a("v-card-title", [e._v(e._s(t))])],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  );
                }),
                a("v-divider"),
                a(
                  "v-form",
                  { ref: "form", staticClass: "ma-4" },
                  [
                    a("v-text-field", {
                      attrs: {
                        rules: e.oldPasswordRules,
                        label: "Altes Password",
                        "prepend-icon": "mdi-lock",
                        type: "password",
                      },
                      model: {
                        value: e.oldPassword,
                        callback: function(t) {
                          e.oldPassword = t;
                        },
                        expression: "oldPassword",
                      },
                    }),
                    a("v-text-field", {
                      attrs: {
                        rules: e.newPasswordRules,
                        label: "Neues Passwort",
                        "prepend-icon": "mdi-lock-outline",
                        type: "password",
                        counter: "20",
                      },
                      model: {
                        value: e.newPassword,
                        callback: function(t) {
                          e.newPassword = t;
                        },
                        expression: "newPassword",
                      },
                    }),
                    a("v-text-field", {
                      attrs: {
                        rules: [e.newPasswordRepeatRules],
                        label: "Nochmal neues Passwort",
                        "prepend-icon": "mdi-lock-outline",
                        type: "password",
                      },
                      on: {
                        keyup: function(t) {
                          return !t.type.indexOf("key") &&
                            e._k(t.keyCode, "enter", 13, t.key, "Enter")
                            ? null
                            : e.validate(t);
                        },
                      },
                      model: {
                        value: e.newPasswordRepeat,
                        callback: function(t) {
                          e.newPasswordRepeat = t;
                        },
                        expression: "newPasswordRepeat",
                      },
                    }),
                    e.errorMsg
                      ? a(
                          "v-alert",
                          { attrs: { dense: "", outlined: "", type: "error" } },
                          [e._v(e._s(e.errorMsg))]
                        )
                      : e._e(),
                    e.success
                      ? a(
                          "v-alert",
                          {
                            attrs: { dense: "", outlined: "", type: "success" },
                          },
                          [e._v("Ihr Passwort wurde erfolgreich verändert.")]
                        )
                      : e._e(),
                  ],
                  1
                ),
                a(
                  "v-btn",
                  {
                    staticClass: "ma-4",
                    attrs: { color: "primary" },
                    on: { click: e.validate },
                  },
                  [e._v("Passwort ändern")]
                ),
                a("v-divider"),
                a(
                  "v-btn",
                  {
                    staticClass: "ma-4",
                    attrs: { color: "error" },
                    on: { click: e.deleteUser },
                  },
                  [e._v("Konto löschen")]
                ),
              ],
              2
            ),
          ],
          1
        );
      },
      se = [],
      re = {
        name: "Profil",
        data: () => ({
          myId: "",
          myProfile: { Username: "", Vorname: "", Nachname: "", Rolle: "" },
          oldPassword: "",
          newPassword: "",
          newPasswordRepeat: "",
          errorMsg: "",
          success: !1,
          oldPasswordRules: [(e) => !!e || "Bitte altes Password eingeben"],
          newPasswordRules: [
            (e) => !!e || "Bitte neues Passwort eingeben",
            (e) =>
              (e && e.length <= 20) ||
              "Das Passwort darf maximal 20 Zeichen lang sein",
            (e) =>
              (e && e.length >= 6) ||
              "Das Passwort muss minimal 6 Zeichen lang sein",
          ],
        }),
        created() {
          this.$store.getters.isLoggedIn || this.$router.push("/login"),
            this.init();
        },
        methods: {
          init() {
            (this.myId = this.$store.getters.getUser.id),
              (this.myProfile = {
                Username: this.$store.getters.getUser.username,
                Vorname: this.$store.getters.getUser.firstname,
                Nachname: this.$store.getters.getUser.lastname,
                Rolle: this.$store.getters.getUser.role,
              });
          },
          newPasswordRepeatRules() {
            return this.newPasswordRepeat
              ? this.newPassword === this.newPasswordRepeat ||
                  "Die neuen Passwörter stimmen nicht überein"
              : "Bitte neues Passwort erneut eingeben";
          },
          validate() {
            this.$refs.form.validate() && this.changePassword();
          },
          async changePassword() {
            try {
              let e = {
                id: this.myId,
                password: this.oldPassword,
                newPassword: this.newPassword,
                newPasswordRepeat: this.newPasswordRepeat,
              };
              await D.a.put("/api/user/changePassword", e).then((e) => e.data);
              this.$refs.form.reset(),
                (this.success = !0),
                setTimeout(() => (this.success = !1), 3e3);
            } catch (e) {
              (this.errorMsg = e.response.data.msg),
                setTimeout(() => (this.errorMsg = !1), 3e3);
            }
          },
          async deleteUser() {
            confirm(
              "Sind Sie sicher, dass Sie ihr Konto inklusive alle dazugehörigen Ziele löschen wollen?"
            ) &&
              (D.a.delete(`/api/user/delete/${this.myId}`),
              this.$store.dispatch("logout"),
              this.$router.push("/login"));
          },
        },
      },
      ne = re,
      ie = a("0fd9"),
      oe = Object(l["a"])(ne, ae, se, !1, null, null, null),
      le = oe.exports;
    c()(oe, {
      VAlert: $["a"],
      VBtn: m["a"],
      VCard: R["a"],
      VCardTitle: C["c"],
      VCol: h["a"],
      VDivider: F["a"],
      VForm: O["a"],
      VRow: ie["a"],
      VTextField: N["a"],
      VToolbar: K["a"],
      VToolbarTitle: w["a"],
    });
    var de = function() {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-col",
          { attrs: { cols: "12", sm: "8", md: "4" } },
          [
            a(
              "v-card",
              [
                a(
                  "v-toolbar",
                  { attrs: { color: "primary", dark: "", flat: "" } },
                  [a("v-toolbar-title", [e._v("Registrieren")])],
                  1
                ),
                a(
                  "v-card-text",
                  [
                    a(
                      "v-form",
                      { ref: "form" },
                      [
                        a("v-text-field", {
                          attrs: {
                            rules: e.usernameRules,
                            label: "Username",
                            "prepend-icon": "mdi-account",
                            type: "text",
                            counter: "12",
                          },
                          model: {
                            value: e.signupData.username,
                            callback: function(t) {
                              e.$set(e.signupData, "username", t);
                            },
                            expression: "signupData.username",
                          },
                        }),
                        a("v-text-field", {
                          attrs: {
                            rules: e.generalRules,
                            label: "Vorname",
                            "prepend-icon": "mdi-account-outline",
                            type: "text",
                          },
                          model: {
                            value: e.signupData.firstname,
                            callback: function(t) {
                              e.$set(e.signupData, "firstname", t);
                            },
                            expression: "signupData.firstname",
                          },
                        }),
                        a("v-text-field", {
                          attrs: {
                            rules: e.generalRules,
                            label: "Nachname",
                            "prepend-icon": "mdi-account-outline",
                            type: "text",
                          },
                          model: {
                            value: e.signupData.lastname,
                            callback: function(t) {
                              e.$set(e.signupData, "lastname", t);
                            },
                            expression: "signupData.lastname",
                          },
                        }),
                        a("v-select", {
                          attrs: {
                            rules: e.generalRules,
                            items: e.roles,
                            label: "Rolle",
                            "prepend-icon": "mdi-badge-account-horizontal",
                          },
                          model: {
                            value: e.signupData.role,
                            callback: function(t) {
                              e.$set(e.signupData, "role", t);
                            },
                            expression: "signupData.role",
                          },
                        }),
                        "Lernende/r" === e.signupData.role
                          ? a("v-select", {
                              attrs: {
                                rules: [e.gradeRules],
                                items: e.grades,
                                label: "Momentane Klasse",
                                "prepend-icon": "mdi-badge-account-horizontal",
                              },
                              model: {
                                value: e.signupData.grade,
                                callback: function(t) {
                                  e.$set(e.signupData, "grade", t);
                                },
                                expression: "signupData.grade",
                              },
                            })
                          : e._e(),
                        "Lehrperson" === e.signupData.role
                          ? a("v-text-field", {
                              attrs: {
                                rules: e.generalRules,
                                label: "Masterpasswort",
                                "prepend-icon": "mdi-lock-outline",
                                type: "password",
                              },
                              model: {
                                value: e.signupData.masterPassword,
                                callback: function(t) {
                                  e.$set(e.signupData, "masterPassword", t);
                                },
                                expression: "signupData.masterPassword",
                              },
                            })
                          : e._e(),
                        a("v-text-field", {
                          attrs: {
                            rules: e.passwordRules,
                            label: "Passwort",
                            "prepend-icon": "mdi-lock",
                            type: "password",
                            counter: "20",
                          },
                          model: {
                            value: e.signupData.password,
                            callback: function(t) {
                              e.$set(e.signupData, "password", t);
                            },
                            expression: "signupData.password",
                          },
                        }),
                        a("v-text-field", {
                          attrs: {
                            rules: [e.passwordRepeatRules],
                            label: "Passwort erneut eingeben",
                            "prepend-icon": "mdi-lock",
                            type: "password",
                          },
                          on: {
                            keyup: function(t) {
                              return !t.type.indexOf("key") &&
                                e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                ? null
                                : e.validate(t);
                            },
                          },
                          model: {
                            value: e.signupData.passwordRepeat,
                            callback: function(t) {
                              e.$set(e.signupData, "passwordRepeat", t);
                            },
                            expression: "signupData.passwordRepeat",
                          },
                        }),
                        e.errorMsg
                          ? a(
                              "v-alert",
                              {
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  type: "error",
                                },
                              },
                              [e._v(e._s(e.errorMsg))]
                            )
                          : e._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                a(
                  "v-card-actions",
                  [
                    a("v-spacer"),
                    a(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: e.validate },
                      },
                      [e._v("Registrieren")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      ce = [],
      ue = {
        data: () => ({
          signupData: {
            username: "",
            firstname: "",
            lastname: "",
            role: "",
            grade: null,
            masterPassword: null,
            password: "",
            passwordRepeat: "",
          },
          errorMsg: "",
          roles: ["Lernende/r", "Lehrperson"],
          grades: ["in17", "in18", "in19"],
          generalRules: [(e) => !!e || "Bitte Feld ausfüllen"],
          usernameRules: [
            (e) => !!e || "Bitte Feld ausfüllen",
            (e) =>
              (e && e.length <= 12) ||
              "Der Username darf maximal 12 Zeichen lang sein",
            (e) =>
              (e && e.length >= 3) ||
              "Der Username muss minimal 3 Zeichen lang sein",
          ],
          passwordRules: [
            (e) => !!e || "Bitte Feld ausfüllen",
            (e) =>
              (e && e.length <= 20) ||
              "Das Passwort darf maximal 20 Zeichen lang sein",
            (e) =>
              (e && e.length >= 6) ||
              "Das Passwort muss minimal 6 Zeichen lang sein",
          ],
        }),
        created() {
          this.$store.getters.isLoggedIn && this.$router.push("/myGoals");
        },
        methods: {
          masterRules() {
            return (
              !(
                "Lernende/r" != this.signupData.role &&
                !this.signupData.masterPassword
              ) || "Bitte Feld ausfüllen"
            );
          },
          gradeRules() {
            return (
              !(
                "Lehrperson" != this.signupData.role && !this.signupData.grade
              ) || "Bitte Feld ausfüllen"
            );
          },
          passwordRepeatRules() {
            return this.signupData.passwordRepeat
              ? this.signupData.password === this.signupData.passwordRepeat ||
                  "Die Beiden Passwörter stimmen nicht überein"
              : "Bitte Feld ausfüllen";
          },
          validate() {
            this.$refs.form.validate() && this.signUp();
          },
          async signUp() {
            "Lehrperson" == this.role && (this.grade = null),
              "Lernende/r" == this.role && (this.masterPassword = null);
            try {
              let e = await D.a
                .post("/api/user/register", this.signupData)
                .then((e) => e.data);
              (this.errorMsg = e.msg), this.$router.push("/login");
            } catch (e) {
              this.errorMsg = e.response.data.msg;
            }
          },
        },
      },
      pe = ue,
      me = Object(l["a"])(pe, de, ce, !1, null, null, null),
      he = me.exports;
    c()(me, {
      VAlert: $["a"],
      VBtn: m["a"],
      VCard: R["a"],
      VCardActions: C["a"],
      VCardText: C["b"],
      VCol: h["a"],
      VForm: O["a"],
      VSelect: X["a"],
      VSpacer: S["a"],
      VTextField: N["a"],
      VToolbar: K["a"],
      VToolbarTitle: w["a"],
    });
    var ve = function() {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-col",
          { attrs: { cols: "12", sm: "8", md: "4" } },
          [
            a(
              "v-card",
              [
                a(
                  "v-toolbar",
                  { attrs: { color: "primary", dark: "", flat: "" } },
                  [a("v-toolbar-title", [e._v("Login")])],
                  1
                ),
                a(
                  "v-card-text",
                  [
                    a(
                      "v-form",
                      { ref: "form" },
                      [
                        a("v-text-field", {
                          attrs: {
                            rules: e.generalRules,
                            label: "Username",
                            "prepend-icon": "mdi-account",
                          },
                          model: {
                            value: e.loginData.username,
                            callback: function(t) {
                              e.$set(e.loginData, "username", t);
                            },
                            expression: "loginData.username",
                          },
                        }),
                        a("v-text-field", {
                          attrs: {
                            rules: e.generalRules,
                            label: "Passwort",
                            "prepend-icon": "mdi-lock",
                            type: "password",
                          },
                          on: {
                            keyup: function(t) {
                              return !t.type.indexOf("key") &&
                                e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                ? null
                                : e.validate(t);
                            },
                          },
                          model: {
                            value: e.loginData.password,
                            callback: function(t) {
                              e.$set(e.loginData, "password", t);
                            },
                            expression: "loginData.password",
                          },
                        }),
                        e.errorMsg
                          ? a(
                              "v-alert",
                              {
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  type: "error",
                                },
                              },
                              [e._v(e._s(e.errorMsg))]
                            )
                          : e._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                a(
                  "v-card-actions",
                  [
                    a("v-spacer"),
                    a(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: e.validate },
                      },
                      [e._v("Login")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      ge = [],
      fe = {
        name: "Login",
        data: () => ({
          loginData: { username: "", password: "" },
          generalRules: [(e) => !!e || "Bitte Feld ausfüllen"],
          errorMsg: "",
        }),
        created() {
          this.$store.getters.isLoggedIn && this.$router.push("/myGoals");
        },
        methods: {
          validate() {
            this.$refs.form.validate() && this.login();
          },
          async login() {
            try {
              let e = await D.a
                  .post("/api/user/login", this.loginData)
                  .then((e) => e.data),
                t = e.token,
                a = e.user;
              this.$store.dispatch("login", { token: t, user: a }),
                this.$router.push("/myGoals");
            } catch (e) {
              this.errorMsg = e.response.data.msg;
            }
          },
        },
      },
      we = fe,
      be = Object(l["a"])(we, ve, ge, !1, null, null, null),
      xe = be.exports;
    c()(be, {
      VAlert: $["a"],
      VBtn: m["a"],
      VCard: R["a"],
      VCardActions: C["a"],
      VCardText: C["b"],
      VCol: h["a"],
      VForm: O["a"],
      VSpacer: S["a"],
      VTextField: N["a"],
      VToolbar: K["a"],
      VToolbarTitle: w["a"],
    }),
      s["a"].use(y["a"]);
    const ye = [
      { path: "/myGoals", name: "myGoals", component: H },
      { path: "/allGoals", name: "allGoals", component: te },
      { path: "/profile", name: "profile", component: le },
      { path: "/register", name: "register", component: he },
      { path: "/login", name: "login", component: xe },
      { path: "*", name: "other", component: xe },
    ];
    let _e = new y["a"]({ mode: "history", base: "/", routes: ye });
    var ke = _e,
      Ve = a("2f62"),
      De = a("0e44");
    s["a"].use(Ve["a"]);
    let Ge = () => ({ token: "", user: {} });
    var Pe = new Ve["a"].Store({
        strict: !0,
        plugins: [Object(De["a"])()],
        state: Ge(),
        getters: { isLoggedIn: (e) => e.token, getUser: (e) => e.user },
        mutations: {
          setToken: (e, t) => {
            e.token = t;
          },
          setUser: (e, t) => {
            e.user = t;
          },
          reset: (e) => {
            Object.assign(e, Ge());
          },
        },
        actions: {
          login: ({ commit: e }, { token: t, user: a }) => {
            e("setToken", t),
              e("setUser", a),
              (D.a.defaults.headers.common["Authorization"] = `Bearer ${t}`);
          },
          logout: ({ commit: e }) => {
            e("reset", ""), (D.a.defaults.headers.common["Authorization"] = "");
          },
        },
      }),
      $e = a("f309");
    s["a"].use($e["a"]);
    var Re = new $e["a"]({});
    (s["a"].config.productionTip = !1),
      (D.a.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${Pe.state.token}`),
      new s["a"]({
        router: ke,
        store: Pe,
        vuetify: Re,
        render: function(e) {
          return e(x);
        },
      }).$mount("#app");
  },
});
//# sourceMappingURL=app.5c02c198.js.map
