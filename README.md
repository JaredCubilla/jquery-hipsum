# jquery-hipsum

An artisanal jQuery plugin for Hipster Ipsum. YOLO

## Usage

Download the script and plop it in your HTML...

```
<script src= "vendor/hipsum.min.js"></script>
```

... and start using it.

```
$('#demo').hipsum();
```

By default, this produces a single paragraph using the html `<p>` tag. You can override these defaults with custom options.

An example of using these options:

```
$('demo').hipsum({
    paragraphs: 2,
    html: false
});
```

The above code produces two paragraphs of Hipster Ipsum using `\n` instead of paragraph tags.

You can even change the type of Hipster Ipsum using the type option, where you can change between "hipster-centric" or "hipster-latin":

```
$('demo').hipsum({
    type: "hipster-centric"
})
```

## License

Licensed under MIT. Uses the [HipsterJesus API](http://hipsterjesus.com/), which was created by the fabulous [Ian Van Ness](http://ianvanness.com/).

Plugin by Jared Cubilla.
