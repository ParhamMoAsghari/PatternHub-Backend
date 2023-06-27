# الگوی Iterator

### همچنین شناخته شده به عنوان:
- Cursor

### انگیزه (Motivation):
الگوی Iterator در نرم‌افزارها استفاده می‌شود تا روشی منظم و یکپارچه برای دسترسی به عناصر یک مجموعه (collection) ارائه دهد. این الگو به ما امکان می‌دهد تا بدون نیاز به آشکارسازی ساختار داخلی مجموعه، به صورت مرحله به مرحله و به ترتیب به عناصر آن دسترسی پیدا کنیم.

### قابلیت استفاده (Applicability):
الگوی Iterator وقتی مناسب است که:
- می‌خواهیم به صورت یکپارچه و یکسان به عناصر یک مجموعه دسترسی پیدا کنیم.
- نیاز داریم به دسترسی به عناصر مجموعه در یک ترتیب خاص و مشخص.
- می‌خواهیم به عناصر مجموعه دسترسی را در حلقه‌ها انجام دهیم بدون اینکه جزئیات ساختار داخلی مجموعه را آشکار کنیم.

### ساختار (Structure):
الگوی Iterator شامل موارد زیر است:
- `Iterator`: رابطی است که عملیات مربوط به دسترسی به عناصر مجموعه را تعریف می‌کند.
- `ConcreteIterator`: کلاسی است که عملیات مربوط به دسترسی به عناصر مجموعه را برای یک مجموعه خاص پیاده‌سازی می‌کند.
- `Aggregate`: رابطی است که مجموعه مورد نظر را تعریف می‌کند و یک شیء `Iterator` را ایجاد می‌کند.
- `ConcreteAggregate`: کلاسی است که مجموعه مورد نظر را پیاده‌سازی می‌کند و یک شیء `ConcreteIterator` را ایجاد می‌کند.

### شرکت‌کنندگان (Participants):
- `Iterator`: رابطی که عملیات مربوط به دسترسی به عناصر مجموعه

را تعریف می‌کند.
- `ConcreteIterator`: کلاسی که عملیات مربوط به دسترسی به عناصر مجموعه را برای یک مجموعه خاص پیاده‌سازی می‌کند.
- `Aggregate`: رابطی که مجموعه مورد نظر را تعریف می‌کند و یک شیء `Iterator` را ایجاد می‌کند.
- `ConcreteAggregate`: کلاسی که مجموعه مورد نظر را پیاده‌سازی می‌کند و یک شیء `ConcreteIterator` را ایجاد می‌کند.

### همکاری (Collaborations):
- کلاس `Iterator` با استفاده از رابط `Aggregate`، برای دسترسی به عناصر مجموعه از طریق `ConcreteIterator` همکاری می‌کند.

### پیامدها (Consequences):
استفاده از الگوی Iterator دارای مزایا و معایب زیر است:
- **مزایا**:
    - می‌سریم روشن استفاده از مجموعه‌ها را می‌کند و عملیات مربوط به دسترسی به عناصر را مجری می‌کند.
    - به ما اجازه می‌دهد که به ترتیب مشخص و مرحله به مرحله به عناصر مجموعه دسترسی پیدا کنیم.
    - کد مربوط به دسترسی به عناصر مجموعه را از کد مربوط به مجموعه جدا می‌کند و قابلیت گسترش را افزایش می‌دهد.

- **معایب**:
    - الگوی Iterator در برخی زبان‌ها ممکن است باعث افزایش هزینه زمانی گردد ولی در بسیاری از زبان‌ها بهینه است.

### پیاده‌سازی (Implementation):
در زبان برنامه‌نویسی C#، می‌توانیم الگوی Iterator را به صورت زیر پیاده‌سازی کنیم:

```csharp
// Iterator
public interface IIterator<T>
{
    T CurrentItem();
    bool HasNext();
    void Next();
}

// ConcreteIterator
public class ConcreteIterator<T> : IIterator<T>
{
    private readonly List<T> _items;
    private int _position = 0;

    public ConcreteIterator(List<T> items)
    {


        _items = items;
    }

    public T CurrentItem()
    {
        return _items[_position];
    }

    public bool HasNext()
    {
        return _position < _items.Count;
    }

    public void Next()
    {
        _position++;
    }
}

// Aggregate
public interface IAggregate<T>
{
    IIterator<T> CreateIterator();
}

// ConcreteAggregate
public class ConcreteAggregate<T> : IAggregate<T>
{
    private readonly List<T> _items = new List<T>();

    public void AddItem(T item)
    {
        _items.Add(item);
    }

    public IIterator<T> CreateIterator()
    {
        return new ConcreteIterator<T>(_items);
    }
}
```

### استفاده‌های شناخته شده (Known Uses):
الگوی Iterator در بسیاری از زبان‌ها و فریمورک‌ها استفاده می‌شود. به عنوان مثال، در زبان C#، این الگو در کلاس‌هایی مانند `List<T>` و `LinkedList<T>` وجود دارد.

### الگوهای مرتبط (Related Patterns):
- **Composite Pattern**: Iterator می‌تواند برای دسترسی به عناصر یک درخت ترکیبی که با الگوی Composite پیاده‌سازی شده است، استفاده شود.
- **Factory Method Pattern**: می‌توان Iterator را برای دسترسی به مجموعه‌هایی که توسط الگوی Factory Method ساخته شده‌اند، استفاده کرد.