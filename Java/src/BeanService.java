import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ListIterator;

public class BeanService {
	private static List<PersonBean> list;
	private static AgeComparator ageComparator;
	private static EmailComparator emailComparator;
	private static FirstNameComparator firstNameComparator;
	private static LastNameComparator lastNameComparator;

	public BeanService() {
	}

	static {
		list = new ArrayList<PersonBean>();
		ageComparator = new AgeComparator();
		emailComparator = new EmailComparator();
		firstNameComparator = new FirstNameComparator();
		lastNameComparator = new LastNameComparator();
	}

	public void addBean(PersonBean pb) {
		list.add(pb);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<PersonBean> sort(BeanProperty prop) {
		Comparator comparator = null;
		if (list.isEmpty())
			return null;
		switch (prop) {
		case FIRSTNAME: {
			comparator = firstNameComparator;
			break;
		}
		case LASTNAME: {
			comparator = lastNameComparator;
			break;
		}
		case EMAIL: {
			comparator = emailComparator;
			break;
		}
		case AGE: {
			comparator = ageComparator;
			break;
		}
		default:
			return null;
		}
		Collections.sort(list, comparator);
		return list;
	}

	public List<PersonBean> searchBean(PersonBean pb) {
		PersonBean bean = null;
		List<PersonBean> searchList = new ArrayList<PersonBean>();
		ListIterator<PersonBean> iterator = getList().listIterator();
		while (iterator.hasNext()) {
			bean  = iterator.next();
			if(bean.equals(pb)) {
				searchList.add(bean);
			}
		}
		return searchList;
	}

	public List<PersonBean> getList() {
		return list;
	}
}
